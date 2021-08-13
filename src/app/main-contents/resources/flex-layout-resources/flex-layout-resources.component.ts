import { Component } from '@angular/core';

@Component({
  selector: 'app-flex-layout-resources',
  templateUrl: './flex-layout-resources.component.html',
  styleUrls: ['./flex-layout-resources.component.scss']
})
export class FlexLayoutResourcesComponent {
  displayedColumns: string[] = ['breakpoint', 'mediaQuery'];
  dataSource: {}[] = [
    {bp: 'xs', mq: 'screen and (max-width: 599px)'},
    {bp: 'sm', mq: 'screen and (min-width: 600px) and (max-width: 969px)'},
    {bp: 'md', mq: 'screen and (min-width: 960px) and (max-width: 1279px)'},
    {bp: 'lg', mq: 'screen and (min-width: 1280px) and (max-width: 1919px)'},
    {bp: 'xl', mq: 'screen and (min-width: 1920px) and (max-width: 5000px)'},
    {bp: 'lt-sm', mq: 'screen and (min-width: 600px)'},
    {bp: 'lt-md', mq: 'screen and (min-width: 960px)'},
    {bp: 'lt-lg', mq: 'screen and (min-width: 1280px)'},
    {bp: 'lt-xl', mq: 'screen and (min-width: 1920px)'},
    {bp: 'gt-xs', mq: 'screen and (max-width: 600px)'},
    {bp: 'gt-sm', mq: 'screen and (max-width: 960px)'},
    {bp: 'gt-md', mq: 'screen and (max-width: 1280px)'},
    {bp: 'gt-lg', mq: 'screen and (max-width: 1920px)'},
  ];

}
