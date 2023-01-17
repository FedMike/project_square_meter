import Bids from './bidsModel.js';
import * as view from './bidsView.js';

export default async function (state) {

    if (!state.bids) state.bids = new Bids();

    await state.bids.getBids();

    view.renderBids(state.bids.bids);
}