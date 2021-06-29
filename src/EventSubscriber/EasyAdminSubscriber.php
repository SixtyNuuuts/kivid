<?php

namespace App\EventSubscriber;

use App\Entity\Video;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => ['setVideoThunbnail'],
        ];
    }

    public function setVideoThunbnail(BeforeEntityPersistedEvent $event)
    {
        $entity = $event->getEntityInstance();
        
        if (!($entity instanceof Video)) {
            return;
        }

        if (!$entity->getUrl()) {
            return;
        }
        
        $urlParsed = parse_url($entity->getUrl(), PHP_URL_QUERY);
        
        parse_str($urlParsed, $queryParams);

        $videoId = $queryParams["v"] ?? '';
       
        $thumbnailUrl = "https://img.youtube.com/vi/{$videoId}/mqdefault.jpg";

        $entity->setThumbnailUrl($thumbnailUrl);
    }
}
