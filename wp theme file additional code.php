// amrit code start
add_action('rest_api_init', 'register_custom_endpoint_landmarks');

function register_custom_endpoint_landmarks() {
    register_rest_route('custom/v1', '/table-landmarks/', array(
        'methods' => 'GET',
        'callback' => 'get_table_data_landmarks',
    ));
}

function get_table_data_landmarks() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'landmarks_6__for_dev_2__all_coord';
    $results = $wpdb->get_results("SELECT * FROM $table_name", ARRAY_A);

    return new WP_REST_Response($results, 200);
}

add_action('rest_api_init', 'register_custom_endpoint_streets');

function register_custom_endpoint_streets() {
    register_rest_route('custom/v1', '/table-streets/', array(
        'methods' => 'GET',
        'callback' => 'get_table_data_streets',
    ));
}

function get_table_data_streets() {
    global $wpdb;
    $table_name = $wpdb->prefix . 'streets_3__for_dev__all_coord';
    $results = $wpdb->get_results("SELECT * FROM $table_name", ARRAY_A);

    return new WP_REST_Response($results, 200);
}
// amrit code ends