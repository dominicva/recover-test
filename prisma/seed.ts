import { prisma } from '../lib/db';
import { hash } from 'bcrypt';

async function main() {
  const password = await hash('password', Number(process.env.SALT_ROUNDS)!);

  const emilie = await prisma.user.create({
    data: {
      email: 'emilie@mail.com',
      password,
      name: 'Emilie',
    },
  });

  const emilieJournalEntry = await prisma.journalEntry.create({
    data: {
      title: 'Emilie Journal Entry',
      content:
        "Today marks six weeks since I took the courageous step towards sobriety, and I couldn't be prouder of how far I've come. It hasn't been an easy journey, but with each passing day, I feel my strength and determination grow. Sobriety has opened my eyes to a world of clarity and possibility. The support from loved ones and the newfound self-discovery have become my pillars of strength. While challenges still arise, I embrace them with resilience and a renewed spirit. Here's to celebrating the small victories and looking forward to the promising road ahead.",
      userId: emilie.id,
    },
  });

  const emilieQuestionnaire = await prisma.questionnaire.create({
    data: {
      userId: emilie.id,
      sleepQuality: 5,
      motivation: 5,
      contentment: 8,
      arousal: 3,
      anger: 2,
      stress: 4,
      sadness: 1,
      anxiety: 2,
      frustration: 3,
      energy: 4,
      concentration: 5,
    },
  });

  const dom = await prisma.user.create({
    data: {
      email: 'dom@mail.com',
      password,
      name: 'Dom',
    },
  });

  const domJournalEntry = await prisma.journalEntry.create({
    data: {
      title: 'Dom Journal Entry',
      content:
        "Today marks six weeks since I took the courageous step towards sobriety, and I couldn't be prouder of how far I've come. It hasn't been an easy journey, but with each passing day, I feel my strength and determination grow. Sobriety has opened my eyes to a world of clarity and possibility. The support from loved ones and the newfound self-discovery have become my pillars of strength. While challenges still arise, I embrace them with resilience and a renewed spirit. Here's to celebrating the small victories and looking forward to the promising road ahead.",
      userId: dom.id,
    },
  });

  const domQuestionnaire = await prisma.questionnaire.create({
    data: {
      userId: dom.id,
      sleepQuality: 9,
      motivation: 5,
      contentment: 3,
      arousal: 3,
      anger: 2,
      stress: 7,
      sadness: 1,
      anxiety: 4,
      frustration: 9,
      energy: 4,
      concentration: 2,
    },
  });

  console.log({ emilie, emilieJournalEntry, emilieQuestionnaire });
  console.log({ dom, domJournalEntry, domQuestionnaire });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
