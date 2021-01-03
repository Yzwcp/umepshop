import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        shopCarts: [],
        isAllCheck: false,
    },
    mutations: {
        addCounter(state, oldCarts) { 
            oldCarts.count +=1
        },
        addshopCarts(state, payload) { 
             state.shopCarts.push(payload)
        }
    },
    actions: {
        addCart(context, payload) {
            return new Promise((resolve, reject) => {
                var oldCarts = context.state.shopCarts.find((item) => {
                    return  payload.iid == item.iid
                  })
                  if (oldCarts) {
                      // oldCarts.count += 1
                      context.commit('addCounter', oldCarts)
                      resolve('数量加+1')
                  } else {
                  //  state.shopCarts.push(payload) 执行代码放到mutations目的是可以在devtools跟踪每一个操作
                      context.commit('addshopCarts', payload)
                      resolve('添加成功')
                      
                  }
             })
        }
    },
    getters: {
        shopCartsLength(state) { 
            return state.shopCarts.length
        },
        shopCarts(state) {
            return state.shopCarts
        },
        shopCartsCount(state) {
            let total =0 
            state.shopCarts.forEach(element => {
                total += element.count
            });
            return total
        },
        shopCartsTotal(state) { 
            let total =0 
            state.shopCarts.forEach(element => {
                total += element.count*element.price
            });
            return total
        },
        // isAllChecked(state) { 
        //     let checked = []
        //     state.shopCarts.forEach(item => { 
        //         checked.push(item.checked) 
        //     })
        //     return checked
        // }
    }
})  
export default store