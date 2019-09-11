/**
 * Create and export redux store for web.
 * @fileOverview
 */

import config from './config/dev';
import { createPlatformStore } from './redux/storeCreater';

export const { store, persistor } = createPlatformStore(config);
