import { Shop, Item } from '../gilded_rose';

describe("Gilded Rose", () => {

    it("should foo", () => {
        const gildedRose = new Shop([new Item("foo", 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).toEqual("foo");
    });
    
    it("elixir should drop quality by 1", () => {
        //arange
        const gildedRose = new Shop([new Item("Elixir of the Mongoose", 5, 7)]);
        //act
        const items = gildedRose.updateQuality();
        //assert
        expect(items[0].quality).toEqual(6);
    });

});

describe("Regular item", () => {
    
    it("Item should drop quality and sellin by 1", () => {
        //arange
        const gildedRose = new Shop([new Item("Regular item", 10, 25)]);
        //act
        const items = gildedRose.updateQuality();
        //assert
        expect(items[0].quality).toEqual(24);
        expect(items[0].sellIn).toEqual(9);
    });
    it("Item should drop quality by 2 after sell in", () => {
        //arange
        const gildedRose = new Shop([new Item("Regular item", -1, 25)]);
        //act
        const items = gildedRose.updateQuality();
        //assert
        expect(items[0].quality).toEqual(23);
    });
    

});
