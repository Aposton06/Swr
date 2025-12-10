import UserProfile from './components/UserProfile';
import PostList from './components/PostList';
import PostListWithMutations from './components/PostListWithMutations';
import InfinitePosts from './components/InfinitePosts';
import UserManagement from './components/UserManagement';

export default function HomePage() {
    return (
        <div >
            <h1>SWR Цирк-шапито </h1>
            
            <section >
                <h2>Лекция 1: Профиль супергероя</h2>
                <UserProfile id="1" />
            </section>

            <section>
                <h2>Лекция 1: Сборник мудростей</h2>
                <PostList />
            </section>

            <section >
                <h2>Лекция 2: Магия мутаций</h2>
                <PostListWithMutations />
            </section>

            <section >
                <h2>Лекция 2: Кроличья нора контента</h2>
                <InfinitePosts />
            </section>

            <section >
                <h2>Лекция 3: Зависимости как в сериалах</h2>
                <UserManagement />
            </section>
        </div>
    );
}