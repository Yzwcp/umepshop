import {
    request
} from './request'
export function getdetail(iid) {
    return request({
        url: '/detail',
        params:{iid}
    })
}
export class GoodInfo {
    constructor(itemInfo, columns, services) {
        
        this.title = itemInfo.title
        this.desc = itemInfo.desc
        this.price = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.discount = itemInfo.discountDesc
        this.columns = columns
        this.services = services
        this.realPrice = itemInfo.lowNowPrice
    }
}
export class Shop {
    constructor(shopInfo) {
        this.logo = shopInfo.shopLogo
        this.shopUrl = shopInfo.shopUrl
        this.name = shopInfo.name
        this.fans = shopInfo.cFans
        this.sells = shopInfo.cSells
        this.score = shopInfo.score
        this.goodsCount = shopInfo.cGoods
    }
}
export class ShopParams {
    constructor(info,rule) {
        this.image = info.images ? info.images[0] : ''
        this.infos = info
        this.sizes = rule
    }
}
export class Remarks {
    constructor(info) {
        this.user = info.user
        this.content = info.content
        this.date = info.created
        this.style = info.style
    }
}