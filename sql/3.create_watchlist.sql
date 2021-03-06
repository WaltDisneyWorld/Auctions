create table watchlist (
  id bigint generated by default as identity primary key,
  user_id uuid references auth.users not null,
  auction_id bigint references public.auctions not null,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

alter table bids enable row level security;

create policy "Individuals can create a watch." on watchlist for
    insert with check (auth.uid() = user_id);

create policy "Individuals can delete their own watch." on watchlist for
    delete using (auth.uid() = user_id);
