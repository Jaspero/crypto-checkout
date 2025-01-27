import { css } from 'lit-element';

export const styles = css`
  
  :host {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    color: #000;
  }

  .cc {
    position: fixed;
    z-index: 2147483647;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    overflow: auto;
    background: rgba(0,0,0,.35);
  }

 
    .cc-content {
      margin: auto;
      width: 100%;
      max-width: 320px;
      background: white;
      border-radius: 1.5em;
      padding: 3em;
      box-shadow: 0 0 .1em rgba(0,0,0,.2), 0 .5em 1em rgba(0,0,0,.1), 0 1em 2em rgba(0,0,0,.05);
      position: relative;
    }

    .cc-close {
      position: fixed;
      top: .25em;
      right: .25em;
      padding: 0;
      border: none;
      font-size: inherit;
      cursor: pointer;
      background: white;
      border-radius: 2em;
    }

    .cc-close:hover,
    .cc-close:focus {
      background: #eee;
    }

    .cc-close-icon {
      width: 1.5em;
      height: 1.5em;
      display: block;
    }
    
    .cc-coins {
      display: flex;
      flex-direction: column;
      max-height: 350px;
      overflow-y: auto;
    }

    .cc-title {
      font-size: 1.375em;
      font-weight: bold;
      margin: 0;
    }

    .cc-description {
      font-size: 1em;
      margin: .25em 0 2em;
      opacity: 0.6;
    }

    .cc-search {
      position: relative;
    }

    .cc-search-icon {
      position: absolute;
      top: .5em;
      left: .5em;
    }

    .cc-search > input {
      border-top-left-radius: 1em;
      border-top-right-radius: 1em;
      border: .1em solid #ccc;
      font-size: inherit;
      font-family: inherit;
      padding: .5em 3.5em;
      box-sizing: border-box;
      width: 100%;
    }    
    
    .cc-coin {
      font-size: inherit;
      font-family: inherit;
      display: flex;
      align-items: center;
      background: none;
      border-top: .1em solid #ccc;
      border-right: .1em solid #ccc;
      border-bottom: none;
      border-left: .1em solid #ccc;
      padding: .5em;
      cursor: pointer;
    }

    .cc-coin:first-of-type {
      border-top: none;
    }
    
    .cc-coin:last-of-type {
      border-bottom-left-radius: 1em;
      border-bottom-right-radius: 1em;
      border-bottom: .1em solid #ccc;
    }

    .cc-coin:hover,
    .cc-coins-button:focus {
      background: #eee;
    }
    
    .cc-coin > svg {
      width: 2em;
      height: 2em;
      margin-right: 1em;
    }
    
    .cc-loading-wrapper {
      margin: 1em 0;
    }
    
    .cc-loading-label {
      margin-top: 1em;
      text-align:center;
    }
    
    #cc-qr {
      text-align: center;
      margin: 1.5em 0;
    }

    #cc-qr > canvas {
      width: 100%;
      max-width: 300px;
    }

    .cc-button {
      cursor: pointer;
      padding: .75em 1em;
      border: 1px solid #ddd;
      border-radius: .5em;
      background: white;
      color: inherit;
      box-shadow: 0 .1em .25em rgba(0,0,0,.25);
      font-size: inherit;
      font-family: inherit;
    }

    .cc-button:hover,
    .cc-button:focus {
      background: #eee;
    }
    
    .cc-notification {
      position: absolute;
      bottom: -3.5em;
      text-align: center;
      left: 50%;
      transform: translateX(-50%);
      background: rgb(33, 33, 33);
      color: white;
      padding: 0.5em;
      box-shadow: rgb(0 0 0 / 25%) 0px 0.1em 0.25em;
      border-radius: 0.5em;
      min-width: 20em;
    }

    .cc-method {
      display: flex;
      align-items: center;
    }

    .cc-method > span {
      margin-left: 0.5em;
    }

    .cc-figure {
      margin: 1em 0;
    }

    .cc-figure-title {
      opacity: .6;
      font-size: .875em;
      margin-bottom: .25em;
    }

    .cc-figure-content {
      word-break: break-word;
    }

    .cc-actions {
      margin-top: 2em;
    }

    .cc-loading {
      display: block;
      border-radius: 50%;
      width: 2em;
      height: 2em;
      border: .15em solid;
      margin: auto;
      border-top-color: transparent;
      border-bottom-color: transparent;
      animation: 1s loading infinite;
    }

    @keyframes loading {
      to { transform: rotate(360deg); }
    }


`;