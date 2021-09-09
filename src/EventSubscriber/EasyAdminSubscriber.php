<?php

namespace App\EventSubscriber;

use App\Entity\Video;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    public static function getSubscribedEvents()
    {
        return [
            BeforeEntityPersistedEvent::class => ['setVideoUrlAndThunbnail'],
            BeforeEntityUpdatedEvent::class => ['setVideoUrlAndThunbnail'],
        ];
    }

    /**
     * @param BeforeEntityPersistedEvent|BeforeEntityUpdatedEvent $event.
     */
    public function setVideoUrlAndThunbnail($event)
    {
        $entity = $event->getEntityInstance();

        if (!($entity instanceof Video)) {
            return;
        }

        if (!$entity->getYoutubeId()) {
            return;
        }

        $url = "https://www.youtube.com/watch?v={$entity->getYoutubeId()}";
        $thumbnailUrl = "https://img.youtube.com/vi/{$entity->getYoutubeId()}/maxresdefault.jpg";

        $entity->setUrl($url);
        $entity->setThumbnailUrl($thumbnailUrl);
    }
}
