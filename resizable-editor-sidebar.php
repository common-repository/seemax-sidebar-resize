<?php /*
   * Plugin Name: SeeMax Sidebar Resize
   * Description: A plugin to allow control over the width of the Gutenberg sidebar.
   * Version: 1.0.1
   * Author: SeeMaxWork
   * Author URI: https://www.seemaxwork.com/
   * License: GPLv2 or later
   */ ?>
<?php function seemax_resize_enqueue(){
    wp_enqueue_script( 'seemax_resize_script', plugin_dir_url( __FILE__ ) . 'script.js', array(), '1.0.0', true);
    wp_enqueue_style( 'seemax_resize_style', plugin_dir_url( __FILE__ ) . 'style.css', true, '1.0', 'all');
}
add_action('admin_enqueue_scripts', 'seemax_resize_enqueue');