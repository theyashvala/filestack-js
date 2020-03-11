/*
 * Copyright (c) 2018 by Filestack.
 * Some rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export enum FilestackErrorType {
  VALIDATION = 'validation',
  REQUEST = 'request',
  OTHER = 'other',
}

export class FilestackError extends Error {

  /**
   * Error details, ie validation errors
   *
   * @type {*}
   * @memberof FilestackError
   */
  public readonly details: any;
  public readonly type: string;

  constructor(message?: string, details?: any, type?: FilestackErrorType) {

    /* istanbul ignore next */
    super(message);
    this.details = details;
    this.type = type;

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.name = FilestackError.name; // stack traces display correctly now
  }

}
