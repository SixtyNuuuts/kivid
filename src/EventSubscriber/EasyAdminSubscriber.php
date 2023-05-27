<?php

namespace App\EventSubscriber;

use App\Entity\Video;
use App\Entity\VideoLibrary;
use App\Repository\VideoLibraryRepository;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityUpdatedEvent;
use EasyCorp\Bundle\EasyAdminBundle\Event\BeforeEntityPersistedEvent;

class EasyAdminSubscriber implements EventSubscriberInterface
{
    private $videoLibraryRepository;

    public function __construct(VideoLibraryRepository $videoLibraryRepository)
    {
        $this->videoLibraryRepository = $videoLibraryRepository;
    }
    
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

        if(!$entity->getVideoLibrary())
            $entity->setVideoLibrary($this->videoLibraryRepository->findOneBy(['id'=>1]));

        $resChoice = $entity->getVideoLibrary() && $entity->getVideoLibrary()->getReference() === 'chevreul' ? 'sddefault' : 'maxresdefault';
        $url = "https://www.youtube.com/watch?v={$entity->getYoutubeId()}";
        $thumbnailUrl = "https://img.youtube.com/vi/{$entity->getYoutubeId()}/{$resChoice}.jpg";

        $entity->setUrl($url);
        $entity->setThumbnailUrl($thumbnailUrl);
    }
}
