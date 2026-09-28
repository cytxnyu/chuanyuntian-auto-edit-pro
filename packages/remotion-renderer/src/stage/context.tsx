import {createContext, useContext} from 'react';
import type {Stage} from '../../../core/src/schema';
export type StageSurfaceContext = {surface: Stage['surface']; surfaceOpacity: number; dualRail: boolean};
export const StageContext = createContext<StageSurfaceContext | null>(null);
export const useStageSurface = () => useContext(StageContext);
