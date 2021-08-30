/**
 * @Author: tao.xie
 * @CreateTime: 2021-5-8 09:42:10
 * @Description: 这是一个加载更多到混入
 */
import {
	LOAD_MODE
} from '@/components/cm-ui/cm-load-list/cmLoadListType.js';

// 加载状态
const LOAD_STATE = {
	LOAD_MORE: 'loadmore', // 初始状态,加载更多
	LOADING: 'loading', // 加载中
	NO_MORE: 'nomore' // 无更多数据
};

export default {
	name: 'load-more-mixin',
	data() {
		return {
			// 加载状态
			loadStatus: null,
			// 是否需要onLoad后自动加载第一页, 可继承修改
			autoLoadData: true,
			// 当前页码, 一般外部不直接更改此数据
			pageIndex: 1,
			// 一页数据量, 可继承修改
			pageSize: 10,
			// 展示到数据列表
			dataList: [],
			// 页面展示模式,列表,空,网络错误
			pageMode: null,
			// 页面滚动的scrollTop
			scrollTop: 0,

			// 是否忽略页面的下拉刷新和上拉加载
			ignorePullToRefresh: false
		};
	},
	onReady() {
		if (this.autoLoadData) {
			this.resetPage();
		}
	},
	onPullDownRefresh() {
		if (this.$data.ignorePullToRefresh) {
			uni.stopPullDownRefresh();
		} else {
			this.doPullDownRefresh();
		}

	},
	onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
	onReachBottom() {
		if (!this.$data.ignorePullToRefresh) {
			this._nextPage();
		}

	},
	methods: {
		/**
		 * 加载数据
		 */
		_loadData(callback) {
			this.loadStatus = LOAD_STATE.LOADING;
			this.getDataList({
					pageIndex: this.pageIndex,
					pageSize: this.pageSize
				})
				.then(res => {
					this._loadDataSuccess(res);
					callback && callback();
				})
				.catch(error => {
					// 页面状态改为网络错误
					this.pageMode = LOAD_MODE.ERROR;
					// 报错就把加载状态置为null
					this.loadStatus = null;
					callback && callback();
				});
		},
		_loadDataSuccess(res) {
			const {
				count,
				list
			} = res;
			if (count <= 0) {
				// 页面状态改为空数据
				this.pageMode = LOAD_MODE.EMPTY;
				this.loadStatus = null;
			} else {
				// 页面状态改为列表
				this.pageMode = LOAD_MODE.LIST;
				if (list && list.length > 0) {
					// 判断是否有数据
					// 判断是否是第一页
					if (this.pageIndex === 1) {
						this.dataList = list;
					} else {
						this.dataList = this.dataList.concat(list);
					}
					// 判断是否加载到最后一页
					if (this.pageIndex * this.pageSize >= count) {
						this.loadStatus = LOAD_STATE.NO_MORE;
					} else {
						this.loadStatus = LOAD_STATE.LOAD_MORE;
						this.pageIndex = this.pageIndex + 1;
					}
				} else {
					this.loadStatus = LOAD_STATE.NO_MORE;
				}
			}
		},

		/**
		 * 下一页
		 */
		_nextPage() {
			//  判断状态非初始状态就退出(不是加载中不是已加载全部)
			if (this.loadStatus && this.loadStatus !== LOAD_STATE.LOAD_MORE) return;

			this._loadData();
		},
		/**
		 * 回到第一页
		 */
		resetPage(resetList = false, callback) {
			//  判断状态正在加载中就退出
			if (this.loadStatus && this.loadStatus === LOAD_STATE.LOADING) {
				callback && callback();
				return;
			}

			this.pageIndex = 1;
			if (resetList) {
				this.dataList = [];
			}
			// 如果当前展示的模式非列表,则将模式置为null
			if (this.pageMode !== LOAD_MODE.LIST) {
				this.pageMode = null;
			}
			this._loadData(callback);
		},
		/**
		 * 获取数据协议, 页面需继承修改
		 * @param {Object} params 请求数据 {pageIndex, pageSize}
		 * @param {Number} pageIndex 页码
		 * @param {Number} pageSize 一页数据量
		 */
		getDataList(params) {
			return new Promise((resolve, reject) => {});
		},
		/**
		 * 下拉刷新的操作, 如有需要可以重写
		 */
		doPullDownRefresh() {
			this.resetPage(false, () => {
				uni.stopPullDownRefresh();
			});
		}
	}
};
