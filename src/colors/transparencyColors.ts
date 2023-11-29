import { hexToRgba } from '../utils';
import ui from './ui';

export const semiTransparentRed = hexToRgba(ui.red[500], 45);
export const semiTransparentBlue = hexToRgba(ui.blue[900], 60);
export const semiTransparentGreen = hexToRgba(ui.green[900], 60);
