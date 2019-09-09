/**
 * Create and export redux store for web.
 * @fileOverview
 */

import config from './config/dev';
import { createPlatformStore } from './uiengine/redux/storeCreater';

export const { store, persistor } = createPlatformStore(config);
