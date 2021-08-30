## 配置化表单

### 表单的Props类型定义见types.ts文件

```javascript
<template>
	<view>
		<cm-form :list="list" :form-data="formData" :showRequiredStar="true" ref="form" @change="_handleFormChange">
		</cm-form>
		<u-button @click="_submit">提交</u-button>
	</view>
</template>

<script>
	import {
		FORM_ITEM_TYPE
	} from '@/components/cm-ui/cm-form/cmFormType.js'
	export default {
		data() {
			return {
				formData: {
					username: '123',
					in: '1',
					pics: []
				},
				list: [{
						type: FORM_ITEM_TYPE.INPUT_TEXT,
						label: '用户名',
						key: 'username',
						required: true,
						disabled: true
					},
					{
						type: FORM_ITEM_TYPE.SELECT,
						label: '性别',
						key: 'sex',
						fieldType: 'number',
						required: true,
						options: [{
								label: '男',
								value: 1
							},
							{
								label: '女',
								value: 2
							}
						],
						keys: ['sexName']
					},
					{
						type: FORM_ITEM_TYPE.SELECT,
						label: '是否参加',
						key: 'in',
						required: true,
						dictId:'SEX'
					},
					{
						type: FORM_ITEM_TYPE.UPLOAD,
						label: '照片',
						key: 'pics',
						required: true,
						action: 'www.example.com'
					},
					{
						type: FORM_ITEM_TYPE.INPUT_IDCARD,
						label: '身份证',
						key: 'idcard',
						required: true
					}
				]
			}
		},
		methods: {
			_submit() {
				this.$refs.form.validate().then(validate => {
					console.info('getValue', this.$refs.form.getValue())

				})

			}
		}
	}
</script>

<style>

</style>

```
