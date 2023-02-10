import { Pipe, PipeTransform } from '@angular/core';
import * as routes from "../../constants/router";

@Pipe({
  name: 'absoluteUrl'
})
export class AbsoluteUrlPipe implements PipeTransform {

  transform(route:any) {

    //@ts-ignore
    return routes[route]?.fullUrl;
  }

}
