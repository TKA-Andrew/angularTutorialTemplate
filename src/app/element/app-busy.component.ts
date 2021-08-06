import { Component } from '@angular/core';

@Component({
    selector: 'app-busy',
    template: `
        <style>
            .spinner {
                border: 8px solid #f3f3f3;
                border-radius: 50%;
                position: relative;
                border-top: 8px solid #3498db;
                width: 30px;
                height: 30px;
                -webkit-animation: spin 2s linear infinite; /* Safari */
                animation: spin 2s linear infinite;
            }

            /* Safari */
            @-webkit-keyframes spin {
                0% { -webkit-transform: rotate(0deg); }
                100% { -webkit-transform: rotate(360deg); }
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
        <div style="width: 100%; height: 100%; display: flex;align-items: center; justify-content: center;">
            <svg class="spinner"></svg>
        </div>
    `,
})
export class AppBusyComponent {}
