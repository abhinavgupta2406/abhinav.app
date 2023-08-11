'use client'

import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.css'

const data = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Blogs',
    url: '/blogs'
  },
  {
    id: 1,
    title: 'Projects',
    url: '/projects'
  }
]
export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>abhinav</Link>
      <div className={styles.links}>
        {data.map(item => (
          <Link key={item.id} href={item.url} className={styles.link}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar