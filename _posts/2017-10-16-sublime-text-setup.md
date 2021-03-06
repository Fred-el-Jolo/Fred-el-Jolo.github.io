---
layout:         post
title:          Sublime text setup guide
date:           2017-10-16 19:00:00
image:          Sublime_Text_3_logo.png
image-alt:      Sublime text logo
tags:           [sublime text, ide, text editor]
categories:     [guide]
---

Sublime text setup guide

<!-- more -->

1. TOC
{:toc}

## Tip & tricks
### Get cursor scope
`ctrl + è` to enter the console and type `print (view.scope_name(view.sel()[0].b))`

## Plugins
### Package control [&#x1f517;](https://packagecontrol.io/installation)
#### Installation
- Display console with ``ctrl + ` ``
- Copy / paste the following code into the console
```sh
import urllib.request,os,hashlib; h = '6f4c264a24d933ce70df5dedcf1dcaee' + 'ebe013ee18cced0ef93d5f746d80ef60'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

#### Usage
`ctrl + shift + p` and type `package control` to display the available options

### All Autocomplete [&#x1f517;](https://packagecontrol.io/packages/All20Autocomplete)

### A File Icon [&#x1f517;](https://packagecontrol.io/packages/A%20File%20Icon)

### SideBarEnhancements [&#x1f517;](https://packagecontrol.io/packages/SideBarEnhancements SideBarEnhancements)

### FileDiffs [&#x1f517;](https://packagecontrol.io/packages/FileDiffs)
#### Usage
Add a key binding for showing the diff menu
```sh
{ "keys": ["ctrl+shift+d"], "command": "file_diff_menu" },
```

### ColorPicker [&#x1f517;](https://packagecontrol.io/packages/ColorPicker)
#### Configuration
Set `color_upper_case` preference to `false`

#### Usage
Use `ctrl + shift + c` to insert or change a color.

### DocBlockr [&#x1f517;](https://packagecontrol.io/search/DocBlockr)
#### Usage 
Type `/**` and hit `tab` or `enter` to generate the comment  
Press `shit + enter` to generate an inline comment

### PlainTasks [&#x1f517;](https://packagecontrol.io/packages/PlainTasks)
#### Usage
Finish a line with `:` to create a category  
Create a new task with `enter + d`  
Terminate a task with `ctrl + d`  
Archive a task with `ctrl + shift + a`  
Priority :
```sh
    c + tab // @critical
    h + tab // @high
    l + tab // @low
    t + tab // @today
```
Due date :
```sh
    @due(+)   → tomorrow as well as @due( +1) or @due( +1d)
    @due(+w)  = @due( +7)
    @due(+3w) = @due( +21d)
    @due(++)  → count time since date of creation if task contains @created(date), otherwise it is equal to @due(+)
    @due(+2:)    = @due( +2.)    →  two hours since current date
    @due(+:555)  = @due( +.555)  →  555 minutes since current date
    @due(+2 12:) = @due( +2 12.) →  2 days and 12 hours since current date
```

### Markdown Preview [&#x1f517;](https://packagecontrol.io/packages/Markdown%20Preview)
#### Usage
`ctrl + shift + p` and type `Markdown Preview` to display the available options  
Add a key binding for quick preview within the browser
```sh
{ "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"} },
```

### MarkdownEditing [&#x1f517;](https://packagecontrol.io/packages/MarkdownEditing)

### Git [&#x1f517;](https://packagecontrol.io/packages/Git)
#### Usage
`ctrl + shift + p` and type `git` to display the available options

### GitGutter [&#x1f517;](https://packagecontrol.io/packages/GitGutter)

### GitStatusBar [&#x1f517;](https://packagecontrol.io/packages/GitStatusBar)
#### Setup
Remove status bar messages from Git and GitGutter

### jQuery [&#x1f517;](https://packagecontrol.io/packages/jQuery)

### Sass [&#x1f517;](https://packagecontrol.io/packages/Sass)

### Emmet [&#x1f517;](https://packagecontrol.io/packages/Emmet)
[Cheat sheet](https://docs.emmet.io/cheat-sheet/)

#### Add .js and .jsx files support
Check [Key Binding](https://docs.emmet.io/cheat-sheet/)[https://gist.github.com/wesbos/2bb4a6998635df97c748](https://gist.github.com/wesbos/2bb4a6998635df97c748)
Use `source.js` and `source.jsx` for full scope support

### Babel [&#x1f517;](https://packagecontrol.io/packages/Babel)
#### Usage
Open a file of the extension to associate with Babel.  
Click `View > Syntax > Open all with current extension as... > Babel > JavaScript (Babel)`

### ESLint-Formatter [&#x1f517;](https://packagecontrol.io/packages/ESLint-Formatter)

### SublimeLinter [&#x1f517;](https://packagecontrol.io/packages/SublimeLinter)
#### Installation & setup
Install `Sublime-contrib-eslint` via [Package Control](https://packagecontrol.io/packages/SublimeLinter-contrib-eslint)  
Install `SublimeLinter-contrib-standard` via [Package Control](https://packagecontrol.io/packages/SublimeLinter-contrib-standard)  
Edit SublimeLinter settings and modify the user settings. The file will be automatically filled.
Disable or enable the chosen linter  
Add the path to node binary (especially if using nvm)  

## User settings
```sh
{
	"color_scheme": "Packages/User/SublimeLinter/Monokai (SL).tmTheme",
	"font_size": 10,
	"ignored_packages":
	[
		"Markdown",
		"Vintage"
	],
	"theme": "Adaptive.sublime-theme",
  	"tab_size": 4,
	"translate_tabs_to_spaces": true,
	"always_show_minimap_viewport": true,
	"auto_find_in_selection": true,
	"caret_style": "phase",
	"highlight_modified_tabs": true,
	"trim_trailing_white_space_on_save": true,
	"rulers": [80],
	"auto_complete_cycle": true,
	"show_encoding": true,
	"remember_full_screen": true,
	"folder_exclude_patterns": ["node_modules", ".svn", ".git", ".hg", "CVS"],
}
```

## Key bindings
```sh
[
	{ "keys": ["super+alt+up"], "command": "select_lines", "args": {"forward": false} },
	{ "keys": ["super+alt+down"], "command": "select_lines", "args": {"forward": true} },
	{ "keys": ["ctrl+)"], "command": "indent" },
	{ "keys": ["ctrl+("], "command": "unindent" },
	{ "keys": ["alt+;"], "command": "close_tag" },
	{ "keys": ["ctrl+:"], "command": "toggle_comment", "args": { "block": false } },
	{ "keys": ["ctrl+shift+:"], "command": "toggle_comment", "args": { "block": true } },
	{ "keys": ["ctrl+è"], "command": "show_panel", "args": {"panel": "console", "toggle": true} },

	{ "keys": ["alt+:"], "command": "auto_complete" },
	{ "keys": ["alt+:"], "command": "replace_completion_with_auto_complete", "context":
		[
			{ "key": "last_command", "operator": "equal", "operand": "insert_best_completion" },
			{ "key": "auto_complete_visible", "operator": "equal", "operand": false },
			{ "key": "setting.tab_completion", "operator": "equal", "operand": true }
		]
	},
	{ "keys": ["ctrl+shift+("], "command": "fold" },
	{ "keys": ["ctrl+shift+)"], "command": "unfold" },	
	{ "keys": ["alt+m"], "command": "markdown_preview", "args": {"target": "browser", "parser":"markdown"} },
	{ "keys": ["ctrl+shift+d"], "command": "file_diff_menu" },
	{
	  "keys": ["tab"], 
	  "command": "expand_abbreviation_by_tab", 
	  // put comma-separated syntax selectors for which 
	  // you want to expandEmmet abbreviations into "operand" key 
	  // instead of SCOPE_SELECTOR.
	  // Examples: source.js, text.html - source
	  "context": [
	    {
	      "operand": "source.js, source.jsx, text.html", 
	      "operator": "equal", 
	      "match_all": true, 
	      "key": "selector"
	    }, 
	    // run only if there's no selected text
	    {
	      "match_all": true, 
	      "key": "selection_empty"
	    },
	    // don't work if there are active tabstops
	    {
	      "operator": "equal", 
	      "operand": false, 
	      "match_all": true, 
	      "key": "has_next_field"
	    }, 
	    // don't work if completion popup is visible and you
	    // want to insert completion with Tab. If you want to
	    // expand Emmet with Tab even if popup is visible -- 
	    // remove this section
	    {
	      "operand": false, 
	      "operator": "equal", 
	      "match_all": true, 
	      "key": "auto_complete_visible"
	    }, 
	    {
	      "match_all": true, 
	      "key": "is_abbreviation"
	    }
	  ]
	}
]
```

## Sources

Graphic logo for Sublime Text software from [en.wikipedia.org/wiki/Sublime_Text#/media/File:Sublime_Text_3_logo.png](https://en.wikipedia.org/wiki/Sublime_Text#/media/File:Sublime_Text_3_logo.png)
