This plugin allows you to select and display multiple images in a Gutenberg block.


Installation

1.Upload the plugin files to the /wp-content/plugins/my-plugin directory, or install the plugin through the WordPress Plugins screen directly.

2.Activate the plugin through the 'Plugins' screen in WordPress.

3.Add the block to a post or page using the block editor.


Usage
1.Click the "Select Images" button to open the file selection dialog.
2.Select one or more images and click "Open" to add them to the block.
3.The selected images will be displayed in a horizontal scrolling container.
4.To change the images, click the "Change Images" button and repeat the process.


Development
This plugin is built using React and Gutenberg components. The plugin code is divided into two parts: the Edit function, which renders the block in the editor, and the save function, which renders the block output on the front-end.
The Edit function uses the useState hook to manage the selected images and the useBlockProps hook to apply the block's styles and attributes. The save function uses the uniqueImages variable to filter out duplicate images and render the output.


Dependencies
This plugin requires the following dependencies:
React (included in WordPress core)
Gutenberg components (included in WordPress core)
Font Awesome (included in the plugin's CSS file)