import styles from '../styles/ChannelGrid.module.sass';
import Link from 'next/link';
import slug from '../helpers/slug';

export default function ChannelGrid({channels}) {
  return (
    <div className={styles.channels}>
      {channels.map(channel => (
        <Link key={channel.id} href={`/${slug(channel.title)}/${channel.id}`}>
          <a className={styles.channel}>
            <img
              className={styles.img}
              src={channel.urls.logo_image.original}
              alt=''
            />
            <h2 className={styles.title}>{channel.title}</h2>
          </a>
        </Link>
      ))}
    </div>
  );
}
