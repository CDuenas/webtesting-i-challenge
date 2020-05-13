const enhancer = require('./enhancer.js');
// test away!

describe("unit tests", () => {

    it("repairs", () => {
        expect(enhancer.repair({name: "Masamune", durability: 99, enhancement: 20})).toEqual({name: "Masamune", durability: 100, enhancement: 20})
        expect(enhancer.repair({name: "Manamune", durability: 0, enhancement: 20})).toEqual({name: "Manamune", durability: 100, enhancement: 20})
        expect(enhancer.repair({name: "Muramasa", durability: -100, enhancement: 20})).toEqual({name: "Muramasa", durability: 100, enhancement: 20})
        expect(enhancer.repair({name: "Excalibur", durability: 66, enhancement: 20})).toEqual({name: "Excalibur", durability: 100, enhancement: 20})
        expect(enhancer.repair({name: "Durandal", durability: 0.5, enhancement: 20})).toEqual({name: "Durandal", durability: 100, enhancement: 20})
    })

    it("succeeds", () => {
        expect(enhancer.succeed({name: "Masamune", durability: 100, enhancement: 20})).toEqual({name: "Masamune", durability: 100, enhancement: 20})
        expect(enhancer.succeed({name: "Manamune", durability: 0, enhancement: 19})).toEqual({name: "Manamune", durability: 0, enhancement: 20})
        expect(enhancer.succeed({name: "Muramasa", durability: -100, enhancement: 0})).toEqual({name: "Muramasa", durability: -100, enhancement: 1})
        expect(enhancer.succeed({name: "Excalibur", durability: 66, enhancement: -1})).toEqual({name: "Excalibur", durability: 66, enhancement: 0})
        expect(enhancer.succeed({name: "Durandal", durability: 0.5, enhancement: 0.5})).toEqual({name: "Durandal", durability: 0.5, enhancement: 1.5})
    })

    it("fails", () => {
        expect(enhancer.fail({name: "Masamune", durability: 99, enhancement: 14})).toEqual({name: "Masamune", durability: 94, enhancement: 14})
        expect(enhancer.fail({name: "Manamune", durability: 0, enhancement: 15})).toEqual({name: "Manamune", durability: -10, enhancement: 15})
        expect(enhancer.fail({name: "Muramasa", durability: -100, enhancement: 16})).toEqual({name: "Muramasa", durability: -110, enhancement: 16})
        expect(enhancer.fail({name: "Excalibur", durability: 66, enhancement: 17})).toEqual({name: "Excalibur", durability: 56, enhancement: 16})
        expect(enhancer.fail({name: "Durandal", durability: 0.5, enhancement: 19})).toEqual({name: "Durandal", durability: -9.5, enhancement: 18})
    })
})