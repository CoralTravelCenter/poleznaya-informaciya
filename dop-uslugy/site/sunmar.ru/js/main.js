import { hostReactAppReady, setH1UnderKV } from '../../common/js/utils'

hostReactAppReady().then(() => {
	setH1UnderKV()
})
