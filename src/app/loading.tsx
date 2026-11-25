export default function Loading() {
return (
    <main className="min-h-screen bg-[#FFF5F7] px-4 py-10 sm:px-8">
    <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col items-center gap-3">
        <div className="h-10 w-72 animate-pulse rounded-md bg-[#FCE7EC]" />
        <div className="h-4 w-56 animate-pulse rounded-md bg-[#FCE7EC]" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
            <div
            key={i}
            className="overflow-hidden rounded-lg border border-[#F3C6D3] bg-[#FFFFFF]"
            >
            <div className="h-48 w-full animate-pulse bg-[#FCE7EC]" />
            <div className="space-y-2 p-4">
                <div className="h-3 w-16 animate-pulse rounded bg-[#FCE7EC]" />
                <div className="h-5 w-32 animate-pulse rounded bg-[#FCE7EC]" />
                <div className="h-4 w-12 animate-pulse rounded bg-[#FCE7EC]" />
            </div>
            </div>
        ))}
        </div>
    </div>
    </main>
)
}