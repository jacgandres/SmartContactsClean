import { NgModule } from '@angular/core';
import { FotoPipe } from './foto/foto';
import { UrlSeguroPipe } from './url-seguro/url-seguro';
@NgModule({
	declarations: [FotoPipe,
    UrlSeguroPipe],
	imports: [],
	exports: [FotoPipe,
    UrlSeguroPipe]
})
export class PipesModule {}
