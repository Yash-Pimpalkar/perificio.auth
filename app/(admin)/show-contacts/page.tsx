// app/contact/page.tsx or wherever your route lives
import ContactPage from '@/pages/Contact/ContactPage';
import { Contact } from '@prisma/client';

import React from 'react'

const page = async() => {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/contact`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <div className="p-8 text-red-600">Failed to fetch contact messages.</div>;
  }

  const data: Contact[] = await res.json();

  return <ContactPage initialContacts={data} />;


}

export default page