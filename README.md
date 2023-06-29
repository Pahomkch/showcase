This project use FSD (Feature Slice Design)

- (yes) app || Global things, important for all application || Global styles, root component
- (no) process || Some process through several pages || Change subscription plan
- (yes) pages || Routes || /about, /me, /profile
- (no) widgets || Some UI hard components || Auth form, chat, block
- (yes) feature || Some app features || Sign-Up, Pay, Send email, Add to team
- (no) entries || Business entries || User, Post, Comment, Team, Game
- (yes) common || Common things, can be moved to other project || Helpers, hooks, variables
