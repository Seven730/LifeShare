import { path as ImageGalleryPath } from "../Screens/ImageGallery/ImageGallery"
import { path as HomePath } from "../Screens/Home/Home"
import { createBrowserHistory } from "history"
import { path as MyGalleryPath } from "../Screens/MyPhotos/MyPhotos"
import { path as AccountPath } from "../Screens/Account/Account"
import { path as prefixPath } from '../../package.json'

const someRandomStuff = "/#"

export default class RedirectHandler {
    static redirectToImages() {
        const history = createBrowserHistory()
        history.push(prefixPath + someRandomStuff + ImageGalleryPath)
        history.go()
    }
    static redirectToHome() {
        const history = createBrowserHistory()
        history.push(prefixPath + someRandomStuff + HomePath)
        history.go()
    }
    static redirectToMyGallery() {
        const history = createBrowserHistory()
        history.push(prefixPath + someRandomStuff + MyGalleryPath)
        history.go()
    }
    static redirectToAccount() {
        const history = createBrowserHistory()
        history.push(prefixPath + someRandomStuff + AccountPath)
        history.go()
    }
}