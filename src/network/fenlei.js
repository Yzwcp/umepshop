import { request } from './request'
export function LeftMainBar() { 
    return request({
        url:'/category'
    })
}
export function getRightCategory(maitKey) { 
    return request({
        url: '/subcategory',
        params: {
            maitKey
        }
    })
}
export function getRightDetail(miniWallkey) { 
    return request({
        url: '/subcategory/detail',
        params: {
            miniWallkey
        }
    })
}