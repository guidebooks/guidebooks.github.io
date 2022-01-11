/*
 * Copyright 2020 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { notebookVFS } from '@kui-shell/plugin-core-support'

/**
 * Register the welcome notebook
 *
 */
export default async () => {
  notebookVFS.cp(
    undefined,
    [
      'plugin://plugin-client-common/notebooks/code-blocks.md',
      'plugin://plugin-client-common/notebooks/expandable-section.md',
      'plugin://plugin-client-common/notebooks/hints.md',
      'plugin://plugin-client-common/notebooks/tabs.md',
      'plugin://client/notebooks/fybrik.md',
      'plugin://client/notebooks/playground.md'
    ],
    '/kui'
  )
}
