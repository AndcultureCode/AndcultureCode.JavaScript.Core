import Humanize from "humanize-plus";
import _ from "lodash";
import { CollectionUtils } from "./collection-utils";

// -----------------------------------------------------------------------------------------
// #region Constants
// -----------------------------------------------------------------------------------------

const REGEX_VALID_EMAIL = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// #endregion Constants

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Returns the filename from the supplied string, including extension
 * @param value
 */
const filename = (value?: string): string | undefined =>
    value?.split("/").pop();

/**
 * Determines whether or not the provided value is NOT `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
const hasValue = (value?: string): boolean =>
    // toString is called here to ensure handling all edge cases when a non string value is passed in this fuction
    value != null && value?.toString().trim() !== "";

/**
 * Determines whether or not the provided value is `undefined`, `null`, or an empty string
 * (after trimming both ends of the string)
 *
 * @param {string} [value]
 * @returns {boolean}
 */
const isEmpty = (value?: string): boolean =>
    // toString is called here to ensure handling all edge cases when a non string value is passed in this fuction
    value == null || value.toString().trim() === "";

/**
 * Validates a given string matches a valid email format
 * @param value
 */
const isValidEmail = (value?: string): boolean =>
    value != null && REGEX_VALID_EMAIL.test(value);

/**
 * Joins an array of strings into one string with a separator. If the array is empty, it will return an empty string.
 *
 * @default ""
 * @param {string[]} values Values to join into one string.
 * @param {string} [separator=","] String to seperate each of the given values.
 * @returns {string}
 */
const join = (values: string[], separator: string = ","): string => {
    if (CollectionUtils.isEmpty(values)) {
        return "";
    }

    return values.join(separator);
};

const truncateRight = (value: string, truncateAtPos: number): string => {
    if (value.length <= truncateAtPos) {
        return value;
    }

    const truncatedValue = value.substring(0, truncateAtPos - 3).trim();

    return truncatedValue.endsWith(".")
        ? truncatedValue
        : `${truncatedValue}...`;
};

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const StringUtils = {
    camelCase: _.camelCase,
    capitalize: _.capitalize,
    filename,
    hasValue,
    isEmpty,
    isValidEmail,
    join,
    lowerFirst: _.lowerFirst,
    pad: _.pad,
    padEnd: _.padEnd,
    padStart: _.padStart,
    pluralize: Humanize.pluralize,
    repeat: _.repeat,
    snakeCase: _.snakeCase,
    startCase: _.startCase,
    template: _.template,
    truncateRight,
    upperFirst: _.upperFirst,
    words: _.words,
};

// #endregion Exports
