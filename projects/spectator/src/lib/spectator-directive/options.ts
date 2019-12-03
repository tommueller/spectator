import { Type, Provider } from '@angular/core';

import { merge } from '../internals/merge';
import { OptionalsRequired } from '../types';
import { BaseSpectatorOptions, getDefaultBaseOptions } from '../base/options';
import { HostComponent } from '../spectator-host/host-component';

/**
 * @publicApi
 */
export interface SpectatorDirectiveOptions<D, H> extends BaseSpectatorOptions {
  directive: Type<D>;
  shallow?: boolean;
  detectChanges?: boolean;
  host?: Type<H>;
  template?: string;
  directiveProviders?: Provider[];
  directiveMocks?: Type<any>[];
}

const defaultSpectatorRoutingOptions: OptionalsRequired<SpectatorDirectiveOptions<any, any>> = {
  ...getDefaultBaseOptions(),
  host: HostComponent,
  template: '',
  shallow: false,
  detectChanges: true,
  directiveProviders: [],
  directiveMocks: []
};

/**
 * @internal
 */
export function getSpectatorDirectiveDefaultOptions<D, H>(
  overrides?: SpectatorDirectiveOptions<D, H>
): Required<SpectatorDirectiveOptions<D, H>> {
  return merge(defaultSpectatorRoutingOptions, overrides);
}
