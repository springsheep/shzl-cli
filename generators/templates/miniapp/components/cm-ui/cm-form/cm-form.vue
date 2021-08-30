<!--
 * @Author: tao.xie
 * @CreateTime: 2021-5-8 09:41:22
 * @Description: 动态表单-去除提交按钮
 * v-model不支持动态数据
 * list中部分参数说明：
 * 1、required 是否必输；
 * 2、fieldType 校验表单值的数据类型，默认string，所以数字类型的必须设置，目前仅 required=true 时有效；
 * 3、type为 RADIO、SELECT 具有options（选项列表）、init（是否初始化默认值）参数、changeValid（值变动需要重新校验表单）；SELECT 具有mode（单选多选模式）参数
 -->
<template>
	<view class="e-form-wrapper">
		<!-- 表单 -->
		<u-form ref="uForm" :model="form" :error-type="['message', 'toast']">
			<u-form-item v-for="(item, index) in fieldList" :key="index" :label="item.label"
				:label-position="item.labelPosition" :prop="item.key" :label-width="`${formLabelWidth}rpx`"
				:required="showRequiredStar && item.required">

				<!-- 下拉组件 :label="selectForm[item.key]" -->
				<cm-form-select v-if="item.type === formTypeEnum.SELECT" :ref="item.key"
					:mode="item.mode || 'single-column'" :value="form[item.key]" :placeholder="item.placeholder"
					:options="item.options" :valueName="item.valueName || 'value'"
					:labelName="item.labelName || 'label'" :disabled="item.disabled"
					:class="{ disabled: item.disabled }" @change="_selectConfirm($event, item)"></cm-form-select>

				<!-- 文件上传 -->
				<cm-form-upload v-else-if="item.type === formTypeEnum.UPLOAD" del-bg-color="#999"
					:maxCount="item.maxCount || 1" :custom-btn="item.previewModel" :show-progress="!item.previewModel"
					:deletable="!item.previewModel" :width="item.width || 160" :height="item.height || 160"
					:fileList="form[item.key]||[]"
					@on-success="(data, index, lists, name)=>_uploadSuccess(data, index, lists, name, item)"
					@on-remove="(index, lists, name)=>_uploadRemove(index, lists, name, item)"
					@on-error="_uploadError($event)" :action="actionUrl">
				</cm-form-upload>

				<!-- HINT: 小程序中无法使用动态插槽,目前一个表单只支持插入一个插槽 -->
				<slot v-else-if="item.type === formTypeEnum.SLOT && item.name ==='map'" name="map"></slot>  <!-- 地图 -->
				<slot v-else-if="item.type === formTypeEnum.SLOT && item.name ==='msg'" name="msg"></slot>  <!-- 验证码 -->
				<slot v-else-if="item.type === formTypeEnum.SLOT && item.name ==='trouble'" name="trouble"></slot> <!-- 问题列表 -->
				<slot v-else-if="item.type === formTypeEnum.SLOT && item.name ==='shopName'" name="shopName"></slot> <!-- 店铺名称 -->

				<!-- 输入框 -->
				<template v-else>
					<text v-if="item.prefixText" class="input-prefix">{{ item.prefixText }}</text>
					<u-input :custom-style="customStyle" :value="form[item.key]"
						:placeholder="item.disabled?'':item.placeholder" :type="item.type || 'text'"
						:disabled="item.disabled" :class="{ disabled: item.disabled }"
						:clearable="item.clearable === false ? item.clearable : true" :border='item.showBorder'
						@input="_inputBlur($event,item)">
					</u-input>
					<text v-if="item.suffixText" class="input-suffix">{{ item.suffixText }}</text>
				</template>
			</u-form-item>
		</u-form>
	</view>
</template>

<script>
	import isPromise from 'is-promise'
	import {
		FORM_ITEM_TYPE,
		getDefaultPlaceholder,
		isSelectType,
		isDictType
	} from './cmFormType.js';

	import {
		baseUrl
	} from '@/api/store-api/instance.js'

	export default {
		name: 'cm-form',
		props: {
			// 表单项
			list: {
				type: Array,
				default: () => []
			},
			// 数据
			formData: {
				type: Object,
				default: () => {
					return {};
				}
			},
			// 表单文字的宽度
			formLabelWidth: {
				type: [String, Number],
				default: 200
			},
			// 整个表单是否展示必输的星号
			showRequiredStar: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				// 表单类型
				formTypeEnum: FORM_ITEM_TYPE,
				// 表单校验规则集合
				formRules: {},
				// 通过函数调用添加的校验规则
				formRuleByAdd: {},
				// 表单数据
				form: {},
				// 下拉值的展示
				selectForm: {},
				// 下拉表单
				fieldList: []
			};
		},
		watch: {
			list(newVal, oldVal) {
				if (newVal) {
					this._parseFieldList(newVal, this.form);
					this._setFormRules();
				}
			},
			formData: {
				handler(newVal) {
					if (newVal) {
						// 数据更新合并
						// this.form = this.$u.deepMerge(this.form, newVal);
						this.form = this.$u.deepMerge({}, newVal);
					}
				},
				deep: true
			}
		},
		computed: {
			customStyle() {
				return {
					color: '#999'
				}
			},
			actionUrl() {
				// 如果是H5走代理 如果是小程序给完整路径
				// #ifdef H5
				return '/file/uploadImgFile'
				// #endif

				// #ifdef MP-WEIXIN
				// return 'http://115.231.181.186:9001/oamp-store/file/uploadImgFile'
				return baseUrl + '/oamp-store/file/uploadImgFile'
				// #endif
			}
		},
		mounted() {
			// 表单校验失败了为true
			this.validError = false;
			this._parseFieldList(this.list, this.formData);
			this._setFormRules();
		},
		methods: {
			// 处理表单项
			_parseFieldList(list, data) {
				const newForm = this.$u.deepClone(data);
				const formRules = {};
				this.fieldList = list.map(item => {

					const newItem = this.$u.deepClone(item);
					const {
						type,
						key
					} = newItem;
					// 如果原本没有palceholder则设置默认的palceholder
					if (!newItem.placeholder) {
						newItem.placeholder = getDefaultPlaceholder(type) + newItem.label;
					}

					// 不可编辑
					newItem.disabled = newItem.disabled;

					// 单项校验规则
					let itemRules = [];
					if (newItem.required && newItem.type !== this.formTypeEnum.SLOT) {
						itemRules.push({
							required: true,
							type: newItem.fieldType || 'string',
							message: newItem.placeholder,
							trigger: isSelectType(type) ? 'change' : 'blur'
						});
					}
					if (newItem.rules) {
						itemRules = itemRules.concat(newItem.rules);
					}
					if (this.formRuleByAdd[key]) {
						itemRules = itemRules.concat(this.formRuleByAdd[key]);
					}
					// 身份证校验
					if (type === FORM_ITEM_TYPE.INPUT_IDCARD) {
						itemRules.push({
							asyncValidator: (rule, value, callback) => {
								const isValid = this.$u.test.idCard(value)
								if (isValid) {
									callback();
								} else {
									callback(new Error('请输入正确的身份证号'));
								}
							},
							trigger: 'blur'
						});
					}
					if (itemRules.length > 0) {
						formRules[key] = itemRules;
					}

					// 可能是字典类型，radio和select
					if (isDictType(type)) {
						// if (newItem.xStore) {
						if (newItem.dictId) {
							this._getDictList(newItem);
						} else if (newItem.init && newForm[key] === undefined) {
							const defaultOp = newItem.options.find(item => item.disabled !== true);
							// 需要初始化值
							newForm[key] = defaultOp.value;
							// 主要针对下拉
							this.selectForm[key] = defaultOp.label;
						}
					}

					// 用于某个值如果发生变动需要重新校验表单时调用
					if (item.changeValid && this.validError) {
						this.$nextTick(() => {
							this.validate()
								.then(() => {})
								.catch(() => {});
						});
					}

					// 上传类型的需要格式化数据，将['/file/6,7095e04906','/file/6,7095e04906']
					// 格式化成：
					// [{url:'http://xxx/xxx/file/6,7095e04906'},{url:'http://xxx/xx/file/6,7095e04906'}]
					if (type === FORM_ITEM_TYPE.UPLOAD) {
						const values = newForm[key]
						newForm[key] = values && values.map(item => {
							return {

								// 判断是否是http(s)开头的，如果不是的话要手动拼接
								url: this.$u.test.url(item) ? item :
									`${this.$store.getters.fileConfig.host}:${this.$store.getters.fileConfig.port}${item.origin ? item.origin : item}`,
								// url: item,
								origin: item.origin ? item.origin : item
							}
						})



					}

					return newItem;
				}).filter(item => !item.hidden);

				this.form = this.$u.deepMerge({}, newForm);
				this.formRules = formRules;
			},
			// 获取对应的字典列表
			// _getDictList(item) {
			_getDictList(item) {
				// const fun = item.xStore
				// if (Object.prototype.toString.call(fun) === '[object Function]') {
				// 	const rs = fun()
				// 	if (isPromise(rs)) {
				// 		rs.then(list => {
				// 			const key = item.key;
				// 			const keyRefs = this.$refs[key];
				// 			if (keyRefs) {
				// 				const itemDom = Array.isArray(keyRefs) ? keyRefs[0] : keyRefs;
				// 				if (itemDom.setOptionList) {
				// 					itemDom.setOptionList(list);
				// 				}
				// 			}
				// 		})
				// 	}
				// }

				this.$mpApi.dataProviderGetCodeList({
					codeType: item.dictId
				}).then(res => {
					if (res.success) {
						const list = res.data.map(x => {
							return {
								label: x.codeName,
								value: x.codeValue
							}
						})

						const key = item.key;
						const keyRefs = this.$refs[key];
						if (keyRefs) {
							const itemDom = Array.isArray(keyRefs) ? keyRefs[0] : keyRefs;
							if (itemDom.setOptionList) {
								itemDom.setOptionList(list);
							}
						}
					}
				})
			},
			// 设置整个表单的校验规则
			_setFormRules() {
				if (this.$refs.uForm) {
					this.$refs.uForm.setRules(this.formRules);
				}
			},
			// 向外发送值改变的事件
			_emitChangeEvent(value, item, key) {
				const targetKey = key || item.key;
				if (this.form[targetKey] !== value) {
					this.$set(this.form, targetKey, value);
					this.$emit('change', {
						key: targetKey,
						value: value,
						form: this.form,
						selectForm: this.selectForm
					});
				}
			},
			// 下拉选择确认
			_selectConfirm(option, item) {
				const {
					value,
					label
				} = option;
				this.$set(this.selectForm, item.key, label);
				this._emitChangeEvent(value, item);
			},
			// 输入框失焦
			_inputBlur(value, item) {
				let resValue = value
				this._emitChangeEvent(resValue, item);
			},
			// 上传成功
			_uploadSuccess(data, index, lists, name, item) {

				if (data.success) {
					const values = lists.map(item => {
						if (item.response) {
							return item.response.data.fileUrl
						} else {
							return item.origin
						}
					})
					this._emitChangeEvent(values, item);
				}
			},
			// 上传删除图片
			_uploadRemove(index, lists, name, item) {

				const values = lists.map(item => {
					if (item.response) {
						return item.response.data.fileUrl
					} else {
						return item.origin
					}
				})

				this._emitChangeEvent(values, item);
			},
			// 上传错误
			_uploadError(e) {},
			// 表单校验，主要供外部调用
			validate() {
				return new Promise((resolve, reject) => {
					if (this.$refs.uForm) {
						this.$refs.uForm.validate(valid => {
							this.validError = !valid;
							if (valid) {
								resolve(true);
							} else {
								reject(new Error('表单校验失败'));
							}
						});
					} else {
						reject(new Error('无表单'));
					}
				});
			},
			// 校验部分表单数据，主要供外部调用
			validateByKeys(keyList) {
				if (this.$refs.uForm) {
					this.$refs.uForm.fields.map(field => {
						if (keyList.includes(field.prop)) {
							field.validation('', () => {});
						}
					});
				}
			},
			/**
			 * 添加表单校验规则，主要供外部调用
			 * @param {Object} keyRules {'key': [rules]}
			 */
			addFormRules(keyRules) {
				for (let key in keyRules) {
					const rules = keyRules[key];
					// 将校验规则记录下来，在fieldList变动时可以不丢掉规则
					this.formRuleByAdd[key] = rules;
					if (this.formRules[key]) {
						this.formRules[key].push(...rules);
					} else {
						this.formRules[key] = rules;
					}
				}
				this._setFormRules();
			},
			// 获取表单数据，主要供外部调用
			getValue() {
				const resForm = {};
				// 只有非空到值才会设置到resForm中
				this.fieldList.forEach(fieldItem => {
					const key = fieldItem.key;

					if (this.form[key]) {
						resForm[key] = this.form[key];

						// 有关联key的话保存关联数据，主要针对下拉框

						if (fieldItem.type === this.$data.formTypeEnum.UPLOAD) {
							// 上传类型，处理origin结构
							resForm[key] = resForm[key].map(item => {
								return typeof item === 'string' ? item : item.origin
							})
						}

						if (fieldItem.keys) {
							fieldItem.keys.forEach(childKey => {
								if (this.selectForm[key]) {
									// 下拉框变动后的值在selectForm中
									resForm[childKey] = this.selectForm[key];
								} else if (this.form[childKey]) {
									// 下拉框初始值在selectForm中
									resForm[childKey] = this.form[childKey];
								}
							});
						}
					}
				});
				return resForm;
			},
			resetFields() {
				this.$refs.uForm && this.$refs.uForm.resetFields()
			}
		}
	};
</script>

<style lang="scss" scoped>
	.e-form-wrapper {
		padding: 0 30rpx;

		.disabled {
			color: #999999;
			// background-color: #f2f5f6;
			// padding: 0 10rpx;

			/deep/.u-input__input {
				color: #999999;
			}
		}
	}
</style>
