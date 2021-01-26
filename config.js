const ITEM_BOMB = 1001;
const ITEM_FOR_LINE = 553;
const ITEM_FOR_CIRCLE = 553;

module.exports = {
    EVENT_MESSAGE_TYPE: 42,
    DUNGEONS: [
        {zoneName: 'CAT', zoneID: [3104, 3204], bosses: {
            1000: [
                //Line Forward + Side Lines
                {id: 107, msg: '', spawns: [
                    {type: 'line', pointDegrees: 90, pointRadius: 400, item: ITEM_FOR_LINE, time: 2000, degrees: 0, intervalRadius: 50, maxRadius: 1000},
                    {type: 'line', pointDegrees: 90, pointRadius: 400, item: ITEM_FOR_LINE, time: 2000, degrees: 180, intervalRadius: 50, maxRadius: 1000},
                    {type: 'line', pointDegrees: 270, pointRadius: 400, item: ITEM_FOR_LINE, time: 2000, degrees: 0, intervalRadius: 50, maxRadius: 1000},
                    {type: 'line', pointDegrees: 270, pointRadius: 400, item: ITEM_FOR_LINE, time: 2000, degrees: 180, intervalRadius: 50, maxRadius: 1000}
                ], timeout: 0},
                //Inner + Outer AOEs
                {id: 114, msg: '', spawns: [
                    {type: 'circle', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_CIRCLE, time: 3000, intervalDegrees: 20, radius: 150}
                ], timeout: 0},
                //Pizza
                {id: 127, msg: '', spawns: [
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 2000, degrees: 160, intervalRadius: 50, maxRadius: 600},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 2000, degrees: 200, intervalRadius: 50, maxRadius: 600}
                ], timeout: 0},
                //Pizza
                {id: 128, msg: '', spawns: [
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 2000, degrees: 160, intervalRadius: 50, maxRadius: 600},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 2000, degrees: 200, intervalRadius: 50, maxRadius: 600}
                ], timeout: 0},
                //Pizza
                {id: 148, msg: '', spawns: [
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 10, intervalRadius: 50, maxRadius: 600},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 3000, degrees: 50, intervalRadius: 50, maxRadius: 600},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 6000, degrees: 180, intervalRadius: 50, maxRadius: 600},
                    {type: 'line', pointDegrees: 0, pointRadius: 0, item: ITEM_FOR_LINE, time: 6000, degrees: 220, intervalRadius: 50, maxRadius: 600}
                ], timeout: 0},
                //Get Skulls
                {id: 156, msg: '', spawns: [
                    {type: 'item', pointDegrees: 360, pointRadius: 450, item: ITEM_BOMB, time: 4000, degrees: 0, radius: 0},
                    {type: 'item', pointDegrees: 180, pointRadius: 450, item: ITEM_FOR_CIRCLE, time: 4000, degrees: 0, radius: 0},
                    {type: 'circle', pointDegrees: 360, pointRadius: 450, item: ITEM_BOMB, time: 4000, intervalDegrees: 20, radius: 180},
                    {type: 'circle', pointDegrees: 180, pointRadius: 450, item: ITEM_FOR_CIRCLE, time: 4000, intervalDegrees: 20, radius: 180}
                ], timeout: 0},
                //Gather!
                {id: 157, msg: '', spawns: [
                    {type: 'text', pointDegrees: 0, pointRadius: 0, text: '2', timeout: 0},
                    {type: 'text', pointDegrees: 0, pointRadius: 0, text: '1', timeout: 1000}
                ], timeout: 0},
                //Gather!
                {id: 158, msg: '', spawns: [
                    {type: 'text', pointDegrees: 0, pointRadius: 0, text: '5', timeout: 0},
                    {type: 'text', pointDegrees: 0, pointRadius: 0, text: '4', timeout: 1000},
                    {type: 'text', pointDegrees: 0, pointRadius: 0, text: '3', timeout: 2000},
                    {type: 'text', pointDegrees: 0, pointRadius: 0, text: '2', timeout: 3000},
                    {type: 'text', pointDegrees: 0, pointRadius: 0, text: '1', timeout: 4000}
                ], timeout: 0}
            ]
        }}
    ]
};
