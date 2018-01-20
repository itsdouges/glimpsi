import { css } from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as mixins from '../../assets/styles/mixins';

export const root = css`
  ${mixins.borderRadius};
  position: relative;
  min-width: 150px;

  &.is-disabled > .Select-control {
    background-color: ${colors.inputDisabled};
  }

  &.is-disabled > .Select-control:hover {
    box-shadow: none;
  }

  &.is-disabled .Select-arrow-zone {
    cursor: default;
    pointer-events: none;
    opacity: 0.35;
  }

  .Select-value {
    ${mixins.borderRadius};
    display: inline-block;
    padding: ${grid.unitless / 2}px ${grid.px};
    margin: 0 ${grid.px};
    background-color: ${colors.selectValue};
  }

  .Select-value-icon {
    border-radius: 3px 0 0 3px;
    background-color: ${colors.negative};
    color: ${colors.textLight};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: ${grid.px};
    margin-left: -${grid.px};
    margin-top: -${grid.unitless / 2}px;
    margin-bottom: -${grid.unitless / 2}px;
    padding: ${grid.unitless / 2}px ${grid.px};
    cursor: pointer;
  }

  .Select-control {
    ${mixins.borderRadius};
    background-color: ${colors.input};
    color: ${colors.textDark};
    cursor: default;
    display: table;
    border-spacing: 0;
    border-collapse: separate;
    height: ${grid.unitless * 4}px;
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .Select-control:hover {
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
  }

  .Select-control .Select-input:focus {
    outline: 0;
  }

  &.is-focused {
    ${mixins.focusRing.raw};
    outline-offset: 0;
  }

  .is-searchable.is-open > .Select-control {
    cursor: text;
  }

  .is-open > .Select-control {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    background: ${colors.input};
  }

  .is-open > .Select-control .Select-arrow {
    top: -2px;
    border-color: transparent transparent #999;
    border-width: 0 5px 5px;
  }

  .is-searchable.is-focused:not(.is-open) > .Select-control {
    cursor: text;
  }

  .is-focused:not(.is-open) > .Select-control {
    border-color: #007eff;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);
  }

  .Select-placeholder,
  .Select--single > .Select-control .Select-value {
    bottom: 0;
    color: #aaa;
    left: 0;
    line-height: 34px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
    right: 0;
    top: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .has-value.is-clearable.Select--single > .Select-control .Select-value {
    padding-right: 42px;
  }

  .has-value.Select--single > .Select-control .Select-value .Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {
    color: ${colors.textDark};
  }

  .has-value.Select--single > .Select-control .Select-value a.Select-value-label,
  .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {
    cursor: pointer;
    text-decoration: none;
  }

  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,
  .has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:hover,
  .has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,
  .has-value.is-pseudo-focused.Select--single
    > .Select-control
    .Select-value
    a.Select-value-label:focus {
    color: #007eff;
    outline: none;
    text-decoration: underline;
  }

  .Select-input {
    height: 34px;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: middle;
  }

  .Select-input > input {
    width: 100%;
    background: none transparent;
    border: 0 none;
    box-shadow: none;
    cursor: default;
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    outline: none;
    line-height: 14px;
    /* For IE 8 compatibility */
    padding: 8px 0 12px;
    /* For IE 8 compatibility */
    -webkit-appearance: none;
  }

  .is-focused .Select-input > input {
    cursor: text;
  }

  .has-value.is-pseudo-focused .Select-input {
    opacity: 0;
  }

  .Select-control:not(.is-searchable) > .Select-input {
    outline: none;
  }

  .Select-loading-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 16px;
  }

  .Select-loading {
    -webkit-animation: Select-animation-spin 400ms infinite linear;
    -o-animation: Select-animation-spin 400ms infinite linear;
    animation: Select-animation-spin 400ms infinite linear;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border-radius: 50%;
    border-right-color: ${colors.textDark};
    display: inline-block;
    position: relative;
    vertical-align: middle;
  }

  .Select-clear-zone {
    -webkit-animation: Select-animation-fadeIn 200ms;
    -o-animation: Select-animation-fadeIn 200ms;
    animation: Select-animation-fadeIn 200ms;
    color: #999;
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 17px;
  }

  .Select-clear-zone:hover {
    color: #d0021b;
  }

  .Select-clear {
    display: inline-block;
    font-size: 18px;
    line-height: 1;
  }

  .Select--multi .Select-clear-zone {
    width: 17px;
  }

  .Select-arrow-zone {
    cursor: pointer;
    display: table-cell;
    position: relative;
    text-align: center;
    vertical-align: middle;
    width: 25px;
    padding-right: 5px;
  }

  .Select-arrow {
    border-color: #999 transparent transparent;
    border-style: solid;
    border-width: 5px 5px 2.5px;
    display: inline-block;
    height: 0;
    width: 0;
    position: relative;
  }

  .is-open .Select-arrow,
  .Select-arrow-zone:hover > .Select-arrow {
    border-top-color: #666;
  }

  .Select--multi .Select-multi-value-wrapper {
    display: inline-block;
  }

  .Select-aria-only {
    display: inline-block;
    height: 1px;
    width: 1px;
    margin: -1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    float: left;
  }

  @-webkit-keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes Select-animation-fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .Select-menu-outer {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    background-color: #fff;
    border-top-color: #e6e6e6;
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    margin-top: 2px;
    max-height: 200px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1;
    -webkit-overflow-scrolling: touch;
  }

  .Select-menu {
    max-height: 198px;
    overflow-y: auto;
  }

  .Select-option {
    box-sizing: border-box;
    background-color: #fff;
    color: #666666;
    cursor: pointer;
    display: block;
    padding: 8px 10px;
  }

  .Select-option:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .Select-option.is-selected {
    background-color: #f5faff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.04);
    color: ${colors.textDark};
  }

  .Select-option.is-focused {
    background-color: #ebf5ff;
    /* Fallback color for IE 8 */
    background-color: ${colors.inputFocus};
    color: ${colors.textDark};
  }

  .Select-option.is-disabled {
    color: #cccccc;
    cursor: default;
  }

  .Select-noresults {
    box-sizing: border-box;
    color: #999999;
    cursor: default;
    display: block;
    padding: 8px 10px;
  }

  .Select--multi .Select-input {
    vertical-align: middle;
    margin-left: 10px;
    padding: 0;
  }

  .Select--multi.has-value .Select-input {
    margin-left: 5px;
  }

  .Select--multi .Select-value {
    background-color: #ebf5ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.08);
    border-radius: 2px;
    color: #007eff;
    display: inline-block;
    font-size: 0.9em;
    line-height: 1.4;
    margin-left: 5px;
    margin-top: 5px;
    vertical-align: top;
  }

  .Select--multi .Select-value-icon,
  .Select--multi .Select-value-label {
    display: inline-block;
    vertical-align: middle;
  }

  .Select--multi .Select-value-label {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
    cursor: default;
    padding: 2px 5px;
  }
  .Select--multi a.Select-value-label {
    color: #007eff;
    cursor: pointer;
    text-decoration: none;
  }

  .Select--multi a.Select-value-label:hover {
    text-decoration: underline;
  }

  .Select--multi .Select-value-icon {
    cursor: pointer;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
    border-right: 1px solid #c2e0ff;
    /* Fallback color for IE 8 */
    border-right: 1px solid rgba(0, 126, 255, 0.24);
    padding: 1px 5px 3px;
  }

  .Select--multi .Select-value-icon:hover,
  .Select--multi .Select-value-icon:focus {
    background-color: #d8eafd;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 113, 230, 0.08);
    color: #0071e6;
  }

  .Select--multi .Select-value-icon:active {
    background-color: #c2e0ff;
    /* Fallback color for IE 8 */
    background-color: rgba(0, 126, 255, 0.24);
  }

  .Select--multi.is-disabled .Select-value {
    background-color: #fcfcfc;
    color: ${colors.textDark};
  }

  .Select--multi.is-disabled .Select-value-icon {
    cursor: not-allowed;
    border-right: 1px solid #e3e3e3;
  }

  .Select--multi.is-disabled .Select-value-icon:hover,
  .Select--multi.is-disabled .Select-value-icon:focus,
  .Select--multi.is-disabled .Select-value-icon:active {
    background-color: #fcfcfc;
  }

  @keyframes Select-animation-spin {
    to {
      transform: rotate(1turn);
    }
  }

  @-webkit-keyframes Select-animation-spin {
    to {
      -webkit-transform: rotate(1turn);
    }
  }
`;
