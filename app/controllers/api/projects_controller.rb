class Api::ProjectsController < ApplicationController
  def index
    filters = nil
    # filters = QueryFilters.new(params['filters']) if params['filters'].present?
    #
    # puts filters.query if filters

    render json: (filters ? Project.where(filters.query) : Project.all.map(&:json))
  end

  def show
    render json: Project.find(params[:id]).json
  end

  def create
    params[:project].permit!

    render json: Project.create(params[:project]).json
  end

  def destroy
    Project.find(params[:id]).destroy
    render json: params[:id]
  end
end
# class QueryFilters
#   def initialize(filters)
#     @parsed_filters = {}
#
#     filters.each do |filter|
#       k, v = filter.split(':')
#       @parsed_filters[k] = v
#     end
#   end
#
#   def query
#     res = []
#     @parsed_filters.each do |k, v|
#       res << filter_to_query(k, v)
#     end
#
#     res.join(' and ')
#   end
#
#   private
#
#   def filter_to_query(k, v)
#     case k
#     when 'state'
#
#     when 'date_range'
#       range = v.split(',').map {|d| Date.parse(d)}.sort
#
#       "(date_start >= '#{range[0]}' and date_end <= '#{range[1]}')"
#     when 'cost_range'
#       range = v.split(',')
#       between = range[0].to_f != 0 || range[0] == '0'
#       range = range.sort if between
#       having = ""
#       if between
#         having += "between #{range[0]} and #{range[1]}"
#       else
#         having += range[0] == '<' ? "< #{range[1]}" : "> #{range[1]}"
#       end
#
#
#       "(select sum(pw.square * w.price_cents / 100) msum from project_works pw
#        join works w on w.id=pw.work_id
#        where pw.project_id=projects.id
#        having msum #{having})"
#     end
#   end
# end
