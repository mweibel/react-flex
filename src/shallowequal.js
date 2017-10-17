/**
 * Copyright 2015-present Zippy Technologies
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *   http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Chekes the equality of two objects by comparing first level
 * of keys
 * @param  {Object} object1
 * @param  {Object} object2
 * @return {[type]}         [description]
 */
function shallowequal(object1, object2) {
  if (object1 === object2) {
    return true;
  }

  if (
    typeof object1 !== 'object' ||
    object1 === null ||
    typeof object2 !== 'object' ||
    object2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  let equal = true;
  for (let i = 0, len = keys1.length; i < len; i++) {
    const key = keys1[i];
    if (object1[key] !== object2[key]) {
      equal = false;
      break;
    }
  }

  return equal;
}

export default shallowequal;
