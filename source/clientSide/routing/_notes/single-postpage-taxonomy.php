<?php

/**
 * List the taxonomies and terms for a given post
 *
 * @param int $post_id
 * @return string

 http://wordpress.stackexchange.com/questions/130993/list-taxonomy-terms-in-current-post-current-category/

 */
function get_the_current_tax_terms_wpse( $post_id )
{
    // get taxonomies for the current post type
    $taxonomies = get_object_taxonomies( get_post_type( $post_id ) );

    $html = "";
    foreach ( (array) $taxonomies as $taxonomy)
    {
        // get the terms related to the post
        $terms = get_the_terms( $post->ID, $taxonomy );
        if ( !empty( $terms ) )
        {
            $li = '';
            foreach ( $terms as $term )
                $li .= sprintf( '<a href="%s"> %s </a>', get_term_link( $term->slug, $taxonomy ), $term->name );

             if( ! empty ( $li ) )
                 $html .= sprintf( '%s:%s', $taxonomy, $li );
        }
    }
    return sprintf( '%s', $html );
}


/**
Lists custom choosen taxonomy
http://stackoverflow.com/questions/15502811/display-current-post-custom-taxonomy-in-wordpress
**/

function custom_taxonomies_terms_links() {
    global $post;
    // some custom taxonomies:
    $taxonomies = array(
                         "field"=>"Dental Field: ",
                         ""=>""
                  );
    $out = "";
    foreach ($taxonomies as $tax => $taxname) {
        $out .= "";
        $out .= $taxname;
        // get the terms related to post
        $terms = get_the_terms( $post->ID, $tax );
        if ( !empty( $terms ) ) {
            foreach ( $terms as $term )
                $out .= '<a href="' .get_term_link($term->slug, $tax) .'">'.$term->name.'</a> ';
        }
        $out .= "<br/>";
    }
    $out .= "";
    return $out;
}

?>
