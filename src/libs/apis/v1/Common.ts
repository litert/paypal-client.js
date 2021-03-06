/**
 *  Copyright 2018 Angus.Fenying <fenying@litert.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import * as Common from "../../Common";

export abstract class AbstractCommand<R>
implements Common.ICommand<R> {

    public get version(): string {

        return "v1";
    }

    public abstract getPath(): string;

    public abstract getBody(): string | Buffer | null;

    public abstract getMethod(): "GET" | "PUT" | "PATCH" | "POST" | "DELETE";

    public isTokenRequired(): boolean {

        return true;
    }

    public parseResponse(
        code: number,
        headers: Record<string, string | string[]>,
        body: string
    ): R {

        return JSON.parse(body);
    }

    public getContentType(): string {

        return "application/json";
    }
}

export interface HATEOASLink {

    href: string;

    rel: string;

    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD";
}
