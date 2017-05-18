/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const HTML_EXAMPLE = `
<div class="dropdown open">
    <button class="dropdown-toggle btn btn-primary" type="button">
        Dropdown
        <clr-icon shape="caret down"></clr-icon>
    </button>
        <div class="dropdown-menu">
            <h4 class="dropdown-header">Dropdown header</h4>
            <a href="..." class="dropdown-item active">Action</a>
            <a href="..." class="dropdown-item disabled">Disabled Link</a>
            <div class="dropdown-divider"></div>
            <a href="..." class="dropdown-item">Lorem.</a>
            <div class="dropdown open right-bottom">
                <button class="dropdown-item active expandable">Lorem ipsum.</button>
                <div class="dropdown-menu">
                    <a href="..." class="dropdown-item">Foo.</a>
                    <div class="dropdown open right-top">
                        <button class="dropdown-item active expandable">Bar.</button>
                        <div class="dropdown-menu">
                            <a href="..." class="dropdown-item">Baz.</a>
                        </div>
                    </div>
                    <a href="..." class="dropdown-item">Foo 2.</a>
                </div>
            </div>
            <a href="..." class="dropdown-item">Ipsum.</a>
        </div>
</div>
`;

@Component({
    selector: "clr-dropdown-static-default-demo",
    styleUrls: ["./dropdown.demo.scss"],
    templateUrl: "./dropdown-static-default.demo.html"
})
export class DropdownStaticDefaultDemo {
    example = HTML_EXAMPLE;
}