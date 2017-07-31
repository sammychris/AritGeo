const assert = require('chai').assert;
const myApp = require('../src/main');

describe("aritGeo", function(){
    
    describe("handle valid input", function(){
        it("should return 0 for []",function(){
            assert.equal(myApp.aritGeo([]),0)
        });

        it("should return Aritmetic for [1,2,3,4,5]",function(){
            assert.equal(myApp.aritGeo([1,2,3,4,5]),"Arithmetric")
        });

        it("should return Geometric for [1,3,9,27]",function(){
            assert.equal(myApp.aritGeo([1,3,9,27]),"Geometric")
        });

        it("should return Aritmetic for [2,4,6,8,10]",function(){
            assert.equal(myApp.aritGeo([2,4,6,8,10]),"Arithmetric")
        });

        it("should return Geometric for [2,6,18]",function(){
            assert.equal(myApp.aritGeo([2,6,18]),"Geometric")
        });

        it("should return Aritmetic for [5,10,15,20,25,30,35,40]",function(){
            assert.equal(myApp.aritGeo([5,10,15,20,25,30,35,40]),"Arithmetric")
        });

        it("should return Geometric for [5,15,45]",function(){
            assert.equal(myApp.aritGeo([5,15,45]),"Geometric")
        });

        it("should return Aritmetic for [100,200,300,400,500,600,700,800]",function(){
            assert.equal(myApp.aritGeo([100,200,300,400,500,600,700,800]),"Arithmetric")
        });

        it("should return Geometric for [10,100,1000,10000]",function(){
            assert.equal(myApp.aritGeo([10,100,1000,10000]),"Geometric")
        });
        it("should return -1 for [1,2,3,4,8,9,10,7,3,8]",function(){
            assert.equal(myApp.aritGeo([1,2,3,4,8,9,10,7,3,8]),"-1")
        });

        it("should return -1 for [3,9,21,25]",function(){
            assert.equal(myApp.aritGeo([3,9,21,25]),"-1")
        });
    });

    describe("handle inValid input",function(){
        it("should return -1 for ['',12,3,4]",function(){
            assert.equal(myApp.aritGeo(['',12,3,4]),"-1")
        });
        it("should return -1 for ['sam',4]",function(){
            assert.equal(myApp.aritGeo(['sam',4]),"-1")
        });
        it("should return -1 for [1,2,3,-4]",function(){
            assert.equal(myApp.aritGeo([1,2,3,-4]),"-1")
        });

        it("should return 0 for boolean",function(){
            assert.equal(myApp.aritGeo(true),"0")
        });

        it("should return 0 for number",function(){
            assert.equal(myApp.aritGeo(4),"0")
        });
    });
});