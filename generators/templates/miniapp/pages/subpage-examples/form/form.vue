<template>
	<view v-if="show">
		<cm-form :list="list" :form-data="formData" :showRequiredStar="true" ref="form" @change="_change">

			<template v-slot:default>
				<!-- <cm-search-map :width="500"></cm-search-map> -->
				<cm-map :width="500"></cm-map>
			</template>

			<template v-slot:extra>
				<!-- <cm-map :width="500"></cm-map> -->
				<cm-search-map :width="500"></cm-search-map>
			</template>


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
				show: false,
				formData: {
					username: '',
					in: '',
					pics: []
				},
				inOptions: [{
						label: '是',
						value: 1
					},
					{
						label: '否',
						value: 2
					}
				]
			}
		},
		computed: {
			list() {
				return [{
						type: FORM_ITEM_TYPE.INPUT_TEXT,
						label: '用户名',
						key: 'username',
						required: true,
						// disabled: true
					},
					{
						type: FORM_ITEM_TYPE.SLOT,
						key: 'map',
						label: '地图',
						default: true
					},
					{
						type: FORM_ITEM_TYPE.SLOT,
						key: 'map2',
						label: '地图2',
						default: false
					},
					{
						type: FORM_ITEM_TYPE.INPUT_TEXTAREA,
						label: '用户名2',
						key: 'username2',
						required: true,
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
						options: this.$data.inOptions
					},
					{
						type: FORM_ITEM_TYPE.UPLOAD,
						label: '门店照片',
						key: 'pics',
						labelPosition: "top",
						maxCount: 6,
						previewModel: false,
						required: false,
						// action: 'http://10.10.77.194:8092/oamp-store/file/uploadFile'
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
				// this.$refs.form.validate().then(validate => {
				console.info('getValue', this.$refs.form.getValue())
				// })

			},
			_change() {
				console.info('change', arguments)
			}
		},
		mounted() {
			setTimeout(() => {
				this.show = true
				this.formData.pics.push('/file/1,67d06f0548')
			}, 1000)
		}
	}
</script>

<style>

</style>
