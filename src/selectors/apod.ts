import { GlobalState } from "../interfaces/state";

// Returns whether the App is fetching data or not
export const isLoading = (state: GlobalState) => state.apod ? state.apod.loading : false;

// Returns the picture data of the image if it exists. Else, returns null
export const getPictureData = (state: GlobalState) => state.apod ? state.apod.pictureData : null;