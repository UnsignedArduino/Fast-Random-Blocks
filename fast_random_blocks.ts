//% blockNamespace=Random color="#FF8000"
class FastRandomBlocks {
    _rng: Math.FastRandom

    constructor(seed: number) {
        this._rng = new Math.FastRandom(seed)
    }

    /**
     * Return the next number between 1 and 65535
     */
    //% block="$this next number"
    //% this.defl=rng
    //% blockId="fastrandomblocks_nextnumber"
    nextNumber() {
        return this._rng.next()
    }

    /**
     * Returns a random number between two numbers
     * @param minimum The minimum number, ex: 1
     * @param maximum The maximum number, ex: 10
     */
    //% block="$this random number between $minimum and $maximum"
    //% inlineInputMode=inline
    //% this.defl=rng
    //% blockId="fastrandomblocks_randomrange"
    randomRange(minimum: number, maximum: number) {
        return this._rng.randomRange(minimum, maximum)
    }

    /**
     * Returns a boolean based on the percent passed in
     * @param percent The percentage of the time the boolean returned will be true.
     */
    //% block="$this $percent percent chance "
    //% this.defl=rng
    //% blockId="fastrandomblocks_percentchance"
    percentChance(percent: number) {
        return this._rng.percentChance(percent)
    }

    /**
     * Returns a boolean with a 50% chance of being true
     */
    //% block="$this 50/50 chance"
    //% this.defl=rng
    //% blockId="fastrandomblocks_randomboolean"
    randomBoolean() {
        return this._rng.randomBool()
    }

    /**
     * Pick a random element from the array passed in
     * @param elements The array to choose from, ex: ["apples", "oranges", "pears"]
     */
    //% block="$this pick random from $elements"
    //% elements.shadow="lists_create_with"
    //% this.defl=rng
    //% blockId="fastrandomblocks_randomelement"
    randomElement(elements: any[]) {
        return this._rng.pickRandom(elements)
    }

    /**
     * Reset the RNG
     */
    //% block="reset $this"
    //% this.defl=rng
    //% blockId="fastrandomblocks_resetrng"
    resetRNG() {
        this._rng.reset()
    }
}


//% color="#FF8000"
namespace Random {
    /**
     * Create a RNG object
     * @param seed The seed for the RNG, ex: 1234. Using 0 as the seed may have unexpected results!!!
     */
    //% block="create RNG || with seed $seed"
    //% blockSetVariable=rng
    //% expandableArgumentMode="toggle"
    //% blockId="random_createrng"
    export function createRNG(seed: number = null): FastRandomBlocks {
        return new FastRandomBlocks(seed);
    }
}
