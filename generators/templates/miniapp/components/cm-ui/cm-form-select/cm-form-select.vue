<!--
 * @Author: tao.xie
 * @CreateTime: 2021-5-8 09:40:03
 * @Description:动态表单-下拉选择组件-单选 
 -->
<template>
	<view class="cm-form-select-wrapper">
		<view class="select-text" :class="{ 'select-empty': !labelText }" @click="_inputClick">
			{{ labelText ? labelText : placeholder }}
		</view>
		<u-select v-if="!disabled" v-model="show" :mode="mode" :defaultValue="defaultSelect" :list="optionList"
			:valueName="valueName" :labelName="labelName" @confirm="_selectConfirm"></u-select>
	</view>
</template>

<script>
	export default {
		name: 'cm-form-select',
		props: {
			// 选中的value
			value: {
				type: [String, Number],
				default: undefined,
				require: false
			},
			// 选中的label
			// label: {
			// 	type: [String, Number],
			// 	default: '',
			// 	require: false
			// },
			// 是否不可编辑
			disabled: {
				type: Boolean,
				default: false,
				require: false
			},
			// 无值是文字提示
			placeholder: {
				type: String,
				default: '请选择',
				require: false
			},
			// 下拉选项列表
			options: {
				type: Array,
				default: () => [],
				require: true
			},
			// value属性名
			valueName: {
				type: String,
				default: 'value',
				require: false
			},
			// label属性名
			labelName: {
				type: String,
				default: 'label',
				require: false
			},
			// 下拉框模式
			// "single-column"-单列模式，"mutil-column"-多列模式，"mutil-column-auto"-多列联动模式
			mode: {
				type: String,
				default: 'single-column',
				require: false
			}
		},
		data() {
			return {
				// 选项弹框是否展示
				show: false,
				// 默认选中的文字展示，主要应对无传入值的时候
				labelText: '',
				// 默认选中项
				defaultSelect: [],
				// 下拉选项列表,内部使用
				optionList: this.options
			};
		},
		watch: {
			options(newVal) {
				if (newVal && newVal.length > 0) {
					this.setOptionList(newVal);
				}
			}
		},
		mounted() {
			this._findDefaultSelect(this.value);
		},
		methods: {
			_inputClick() {
				this.show = true;
			},
			// 给外部发送值改变的事件
			_emitChange(value) {
				this.$emit('change', {
					value,
					label: this.labelText
				});
			},
			/**
			 * 点击确定
			 * @param {Array} list 选中项列表
			 */
			_selectConfirm(list) {
				const value = list[list.length - 1].value;
				this._findDefaultSelect(value);
				// 点击选择弹框的确定，传出对应的form的key和选择的选项列表
				// this.$emit('change', list);
				this._emitChange(value);
			},
			// 设置默认的选中文字
			_setDefaultLabel(labelText) {
				if (labelText !== this.labelText) {
					this.labelText = labelText;
				}
			},
			// 重置选中为空
			_resetSelect() {
				this._emitChange('');
				this._setDefaultLabel('');
			},
			/**
			 * 找到下拉列表默认选中的index
			 * @param {String} value
			 */
			_findDefaultSelect(value) {
				if (this.optionList && this.optionList.length > 0 && value) {
					if (this.mode === 'single-column') {
						this.defaultSelect = this._findSingleDefaultSelect(value);
					} else {
						const res = this._findMultiDefaultSelect(this.optionList, value);
						if (!res) {
							// 如果没找到，则说明默认值是不可选的，清空即可
							this._resetSelect();
						}
						this.defaultSelect = res || [];
					}
				}
			},
			/**
			 * 找到默认选中的值-单列模式
			 * @param {String} value
			 */
			_findSingleDefaultSelect(value) {
				const index = this.optionList.findIndex(option => {
					if (option[this.valueName] === value) {
						this._setDefaultLabel(option[this.labelName]);
						return true;
					}
					return false;
				});
				if (index >= 0) {
					return [index];
				} else {
					// 如果没找到，则说明默认值是不可选的，清空即可
					this._resetSelect();
					return [0];
				}
			},
			/**
			 * 找到默认选中的值-多列模式
			 * @param {Array} options 所有的选项列表
			 * @param {String} value 默认选中的最后一个value
			 * @param {Array} defaultSelectList 默认选中value的列表
			 * @param {String} label 默认选中拼接的label
			 */
			_findMultiDefaultSelect(options, value, defaultSelectList = [], labelList = []) {
				for (let i = 0; i < options.length; i++) {
					const item = options[i];
					const itemValue = item[this.valueName];
					// const itemLabel = label + item[this.labelName];
					const itemLabelList = [...labelList, item[this.labelName]];
					const resList = [...defaultSelectList, i];
					if (item.children) {
						// 判断是否有子节点，有的话就去找子节点
						const childrenRes = this._findMultiDefaultSelect(item.children, value, resList, itemLabelList);
						if (childrenRes) {
							return childrenRes;
						}
					} else if (itemValue === value) {
						// 没有子节点的话就判断跟协议返回的mcc是否相等，一致则返回对应列表
						this._setDefaultLabel(itemLabelList.join('/'));
						return resList;
					}
				}
			},
			// 设置options
			setOptionList(list) {
				this.optionList = list;
				this._findDefaultSelect(this.value);
			}
		}
	};
</script>
<style lang="scss" scoped>
	.cm-form-select-wrapper {
		width: 100%;

		.select-empty {
			color: #c0c4cc;
		}

		/* #ifdef MP-ALIPAY */
		.select-empty {
			padding: 0 2px !important;
		}

		/* #endif */
	}
</style>
