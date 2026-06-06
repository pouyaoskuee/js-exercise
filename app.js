//
// const arry = ['pouya', 1,2,3]
//
//
// console.log(arry)
//
// arry[1]='ah'
//
// console.log(ary)

//
// const totalPrice = 100_000
//
// const limit= 1000
//
// console.log(totalPrice>limit)
//
// const name= 'pouya'
//
//
// const selectColor = 'red'
//
// const defaultColor = 'green'
//
//
// console.log(selectColor?selectColor:defaultColor)
//
// console.log(Boolean(2))
//
// let a = 'first'
// let b = 'second'
//
// const c = a
//
// a = b
// b = c
//
// console.log(a)
// console.log(b)
//
//
// const birthYear = 1946
//
// const now = 2026
//
// const yearOfBirth = now-birthYear
//
// const weekOfBirth = yearOfBirth*52
//
// console.log(weekOfBirth*7)
//
//
// const x = 'hello'
//
// // console.log(1-x)
//
// function ham (){
//     switch (x){
//         case x === 'first':
//             return 'hello'
//         case x === 'second':
//
//     }
// }
//
//
// let f= 0
//
// for (let i=0 ; i <= 10; i++){
//     f+=3
//     console.log(f)
// }
//
//
// let w = 20
//
// do{
//     console.log(w)
//     w++
// }while(w<30)
//
//
// const user = {
//     name:"John",
//     email:'jhon@hhg.com',
//     phonNum:48939039
// }
//
// for ( const key of user) {
//     console.log(key)
// }
//
//
// const roles = ['admin' , 'teacher' , 'merchant']
//
// for (const index of roles) {
//     console.log(index)
// }


// let c = 0
//
// while (c<10 ){
//     if (c<5){
//
//         if (c===3){
//             console.log('hello')
//             continue
//         }
//     }
//     console.log(c)
//
// }

// function area (radius){
//     console.log(3.14*(radius**2))
// }
//
// area(3)

// function selectRole (role) {
//     if (role === 'admin') return 'you are admin'
//     if (role === 'merchant') return 'you are merchant'
//     if (role === 'teacher') return 'you are teacher'
//     return 'you dont chosse role'
// }
//
// console.log(selectRole(''))
//
//
// function selectRoleByCase (role) {
//     switch (role) {
//         case 'admin':
//             return 'you are admin'
//         case 'teacher':
//             return 'you are teacher'
//         case 'merchant':
//             return 'you are merchant'
//         default: return  'you dont chosse role'
//     }
// }
//
// console.log(selectRoleByCase(''))


// function witchIsMax ( a, b ){
//     return a>b? a : b
//     // if (a>b) return a
//     // return b
//
//
// }

// console.log(witchIsMax(342525, 44245))


// function FizzBuzz (number:number) {
//     if (number % 3 === 0 && number % 5 === 0 ) return 'its FizzBuzz'
//     if (number % 3 === 0) return 'its Fizz'
//     if (number % 5 === 0) return 'its Buzz'
// }
//
// console.log(FizzBuzz(5))
//
// console.log(new Date().toISOString())

// function calcDiscountPercent(total:number){
//     if(total < 100) return  'no discount'
//     if(total >= 100 && total<110) return 3
//     if(total >= 110 && total< 125) return 5
//     if(total >= 125 && total < 140) return 10
//     return 25
// }
//
//
// console.log(calcDiscountPercent(200))

// function calcDiscountPercent(total){
//     if(total < 110) return 'not discount'
//     if(total >= 140) return 25
//     const discountStep = 3.3
//     return Math.round((total - 100)/discountStep);
// }
//
//
// console.log(calcDiscountPercent(105))


// const course = {
//     title:'react.js',
//     price:120,
//     discount: 20,
//     category: {
//         id:0,
//         title:'front',
//         description:'its front end category'
//     },
//     calcPrice: function (){
//         this.offPrice = (this.price * (1-this.discount/100))
//
//
//     },
// }
//
// // console.log(course.calcPrice())
//
// course.calcPrice()
//
// console.log(course.offPrice)
//
// function factory(title , description , price){
//     return{
//         title,
//         description,
//         price
//     }
// }
//
//
//
//
// console.log(factory('react.js', 'its a course' , 100))


//
// function Constructor1 (title , description , price){
//     this.title = title
//     this.description = description
//     this.price = price
//
// }
//
// const course2= new Constructor1('react.js', 'its a course' , 100)
//
// console.log(course2)
//
// console.log(course2 instanceof Constructor1)
//
// course2.title='pouya'
//
// console.log(course2)
//
// const test ={
//     title:'pouya',
//     description:'pouya is assistant',
//     price:100
// }
//
// const test2 = test
//
//
// test2.title='nass'
//
// console.log(test)
//
// console.log(test.hasOwnProperty('title'))
//
// console.log(Object.values(test))
//
// console.log(Object.entries(test))

//
//
// const str = 'pouya'
//
// const strObj = new String('pouya')
//
//
//
// const bool = true
//
// const boolObj = new Boolean(bool)
//
//
//
// const num = 5992
//
// const numObj = new Number(num)
//
// const array  = [1,2,4]
//
// const arrayObj = new Array(array)
//
//
//
//
//
//
// console.log(typeof str , str)
//
// console.log(typeof strObj , strObj)
//
// console.log(typeof bool , bool)
//
// console.log(typeof boolObj , boolObj)
//
// console.log(typeof numObj , numObj)


// console.log(typeof arrayObj , arrayObj)


// if (NaN){
//     console.log('true')
// }else {
//     console.log('false')
// }
//
//
//
//
// const result = Boolean(NaN) ?? true
//
// if (result){
//     console.log('true')
// }else {
//     console.log('false')
// }


const user = {
    title:'pouya',
    age:24,
    fiend:['nas', 'yamete']
}

const user2 = Object.assign({}, user)
user2.age=20
user2.fiend.push('ham')
console.log(user , user2)

const user3 = JSON.parse(JSON.stringify(user))

user3.fiend.push('dam dam')

console.log(user , user2 , user3)

const course = {
    title:'react',
    description:'it is a couurse',
    category:{
        id:2,
        title:'frontend'
    },

    showWelcome: function (){
        return `hi Welcome to ${this.title} course`
    }
}

const {category: {id , title:categoryTitle} , description} = course

console.log( categoryTitle , course.showWelcome())

