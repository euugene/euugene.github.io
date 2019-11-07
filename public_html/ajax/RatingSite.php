<?php

/**
 * Created by PhpStorm.
 * User: d.kuzma
 * Date: 17.07.2019
 * Time: 21:23
 */
require_once('Okay.php');

class RatingSite extends Okay {

	#Выборка рейтинга сайта
	public function get_rating_site() {

		$query = "SELECT DISTINCT
				count(*) AS cnt,
				FORMAT(SUM(rating)/count(*),1) AS rating

            FROM __rating_site
            LIMIT 1";

        $this->db->query($query);

        $rating = $this->db->results();

        if($rating){
        	$rating = $rating[0];
        }

        return $rating;

	}

}
