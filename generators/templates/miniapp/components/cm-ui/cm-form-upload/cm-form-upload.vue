<template>
	<view class="u-upload" v-if="!disabled">
		<view v-if="showUploadList" class="u-list-item u-preview-wrap" v-for="(item, index) in lists" :key="index"
			:style="{
				width: $u.addUnit(width),
				height: $u.addUnit(height)
			}">
			<view v-if="deletable" class="u-delete-icon" @tap.stop="deleteItem(index)" :style="{
					background: delBgColor
				}">
				<u-icon class="u-icon" :name="delIcon" size="20" :color="delColor"></u-icon>
			</view>
			<u-line-progress v-if="showProgress && item.progress > 0 && !item.error" :show-percent="false" height="16"
				class="u-progress" :percent="item.progress"></u-line-progress>
			<view @tap.stop="retry(index)" v-if="item.error" class="u-error-btn">点击重试</view>
			<image @tap.stop="doPreviewImage(item.url || item.path, index)" class="u-preview-image" v-if="!item.isImage"
				:src="item.url || item.path" :mode="imageMode"></image>
		</view>
		<slot name="file" :file="lists"></slot>
		<view style="display: inline-block;" @tap="selectFile" v-if="maxCount > lists.length">
			<slot name="addBtn"></slot>
			<view v-if="!customBtn" class="u-list-item u-add-wrap" hover-class="u-add-wrap__hover" hover-stay-time="150"
				:style="{
					width: $u.addUnit(width),
					height: $u.addUnit(height)
				}">
				<u-icon name="plus" class="u-add-btn" size="40"></u-icon>
				<view class="u-add-tips">{{ uploadText }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	/**
	 * upload 图片上传
	 * @description 该组件用于上传图片场景
	 * @tutorial https://www.uviewui.com/components/upload.html
	 * @property {String} action 服务器上传地址
	 * @property {String Number} max-count 最大选择图片的数量（默认99）
	 * @property {Boolean} custom-btn 如果需要自定义选择图片的按钮，设置为true（默认false）
	 * @property {Boolean} show-progress 是否显示进度条（默认true）
	 * @property {Boolean} disabled 是否启用(显示/移仓)组件（默认false）
	 * @property {String} image-mode 预览图片等显示模式，可选值为uni的image的mode属性值（默认aspectFill）
	 * @property {String} del-icon 右上角删除图标名称，只能为uView内置图标
	 * @property {String} del-bg-color 右上角关闭按钮的背景颜色
	 * @property {String | Number} index 在各个回调事件中的最后一个参数返回，用于区别是哪一个组件的事件
	 * @property {String} del-color 右上角关闭按钮图标的颜色
	 * @property {Object} header 上传携带的头信息，对象形式
	 * @property {Object} form-data 上传额外携带的参数
	 * @property {String} name 上传文件的字段名，供后端获取使用（默认file）
	 * @property {Array<String>} size-type original 原图，compressed 压缩图，默认二者都有（默认['original', 'compressed']）
	 * @property {Array<String>} source-type 选择图片的来源，album-从相册选图，camera-使用相机，默认二者都有（默认['album', 'camera']）
	 * @property {Boolean} preview-full-image	是否可以通过uni.previewImage预览已选择的图片（默认true）
	 * @property {Boolean} multiple	是否开启图片多选，部分安卓机型不支持（默认true）
	 * @property {Boolean} deletable 是否显示删除图片的按钮（默认true）
	 * @property {String Number} max-size 选择单个文件的最大大小，单位B(byte)，默认不限制（默认Number.MAX_VALUE）
	 * @property {Array<Object>} file-list 默认显示的图片列表，数组元素为对象，必须提供url属性
	 * @property {Boolean} upload-text 选择图片按钮的提示文字（默认“选择图片”）
	 * @property {Boolean} auto-upload 选择完图片是否自动上传，见上方说明（默认true）
	 * @property {Boolean} show-tips 特殊情况下是否自动提示toast，见上方说明（默认true）
	 * @property {Boolean} show-upload-list 是否显示组件内部的图片预览（默认true）
	 * @event {Function} on-oversize 图片大小超出最大允许大小
	 * @event {Function} on-preview 全屏预览图片时触发
	 * @event {Function} on-remove 移除图片时触发
	 * @event {Function} on-success 图片上传成功时触发
	 * @event {Function} on-change 图片上传后，无论成功或者失败都会触发
	 * @event {Function} on-error 图片上传失败时触发
	 * @event {Function} on-progress 图片上传过程中的进度变化过程触发
	 * @event {Function} on-uploaded 所有图片上传完毕触发
	 * @event {Function} on-choose-complete 每次选择图片后触发，只是让外部可以得知每次选择后，内部的文件列表
	 * @example <u-upload :action="action" :file-list="fileList" ></u-upload>
	 */

	import UUpload from 'uview-ui/components/u-upload/u-upload.vue'
	export default {
		name: 'cm-form-upload',
		extends: UUpload,
		watch: {
			fileList: {
				immediate: true,
				handler(val) {
					val.map(value => {
						// 首先检查内部是否已经添加过这张图片，因为外部绑定了一个对象给fileList的话(对象引用)，进行修改外部fileList
						// 时，会触发watch，导致重新把原来的图片再次添加到this.lists
						// 数组的some方法意思是，只要数组元素有任意一个元素条件符合，就返回true，而另一个数组的every方法的意思是数组所有元素都符合条件才返回true
						let tmp = this.lists.some(val => {

								if (typeof value === 'string') {

									if (val.response) {
										return value === val.response.data.fileUrl
									} else {
										return value === val.origin || value === val.url
									}


								} else {
									if (val.response) {
										return value.origin === val.response.data.fileUrl
									} else {
										return val.url == value.url || val.origin === value.origin
									}

								}


							})


							// 如果内部没有这个图片(tmp为false)，则添加到内部
							!tmp && (value.url || value.origin) && this.lists.push({
								url: value.url,
								error: false,
								origin: value.origin,
								progress: 100
							});


					});
				}
			}
		}

	};
</script>

<style lang="scss" scoped>
	@import 'uview-ui/libs/css/style.components.scss';

	.u-upload {
		@include vue-flex;
		flex-wrap: wrap;
		align-items: center;
	}

	.u-list-item {
		width: 200rpx;
		height: 200rpx;
		overflow: hidden;
		margin: 10rpx;
		background: rgb(244, 245, 246);
		position: relative;
		border-radius: 10rpx;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		align-items: center;
		justify-content: center;
	}

	.u-preview-wrap {
		border: 1px solid rgb(235, 236, 238);
	}

	.u-add-wrap {
		flex-direction: column;
		color: $u-content-color;
		font-size: 26rpx;
	}

	.u-add-tips {
		margin-top: 20rpx;
		line-height: 40rpx;
	}

	.u-add-wrap__hover {
		background-color: rgb(235, 236, 238);
	}

	.u-preview-image {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 10rpx;
	}

	.u-delete-icon {
		position: absolute;
		top: 10rpx;
		right: 10rpx;
		z-index: 10;
		background-color: $u-type-error;
		border-radius: 100rpx;
		width: 44rpx;
		height: 44rpx;
		@include vue-flex;
		align-items: center;
		justify-content: center;
	}

	.u-icon {
		@include vue-flex;
		align-items: center;
		justify-content: center;
	}

	.u-progress {
		position: absolute;
		bottom: 10rpx;
		left: 8rpx;
		right: 8rpx;
		z-index: 9;
		width: auto;
	}

	.u-error-btn {
		color: #ffffff;
		background-color: $u-type-error;
		font-size: 20rpx;
		padding: 4px 0;
		text-align: center;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9;
		line-height: 1;
	}
</style>
